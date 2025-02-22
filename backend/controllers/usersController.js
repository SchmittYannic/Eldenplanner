import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Build from "../models/Build.js";
import Comment from "../models/Comment.js";
import CommentLike from "../models/CommentLike.js";
import Star from "../models/Star.js";
import { signupschema, passwordschema, usernameschema, emailschema, mongooseidschema } from "../validation/userschema.js";
import { parseError } from "../utils/helpers.js";
import emailVerificationSender from "../middleware/emailVerificationSender.js";
import avatarUrlLookup from "../config/avatarUrlLookup.js";


// @desc Get user by id
// @route GET /users/:id
// @access Public
const getUserById = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "Missing id parameter" });
        }

        await mongooseidschema.required().validateAsync(id);

        const user = await User.findById(id).select("username avatarUrl totalComments totalStarsGiven createdAt").lean().exec();

        if (!user) {
            return res.status(400).json({ message: "No user found" });
        }

        const transformedUser = {
            ...user,
            id: user._id.toString(),
        };

        res.status(200).json(transformedUser);
    } catch (err) {
        return res.status(500).json({ message: "Error retrieving user" })
    }
}

// @desc Create new user
// @route POST /users
// @access Public
const createNewUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
        } = req.body;

        await signupschema.validateAsync({
            username,
            email,
            password,
        });

        /* Check for duplicate */
        // if you use async await and expect a promise back u should use exec at the end.
        // collation to make sure it is case insensitive -> Hank and hank count as duplicates
        const duplicateUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec();

        if (duplicateUsername) {
            return res.status(409).json({ message: "Username already in use", context: { label: "username" } });
        }

        const duplicateEmail = await User.findOne({ email: email.toLowerCase() }).lean().exec();

        if (duplicateEmail) {
            return res.status(409).json({ message: "Email already in use", context: { label: "email" } });
        }

        /* hash password */
        const hashedPwd = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));

        /* get default profile picture */
        const firstLetterUsername = Array.from(username)[0].toLowerCase();
        const avatarUrl = avatarUrlLookup[firstLetterUsername];

        /* Create and store new user in DB */
        const user = await User.create({
            username,
            password: hashedPwd,
            email: email.toLowerCase(),
            avatarUrl,
        });

        if (user) {
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userId": user._id,
                        "username": user.username,
                        "email": user.email,
                        "avatarUrl": user.avatarUrl,
                        "roles": user.roles,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: process.env.EXPIRATION_ACCESS_TOKEN ?? "15m"
                }
            );

            const refreshToken = jwt.sign(
                { "username": user.username },
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: process.env.EXPIRATION_REFRESH_TOKEN ?? "7d"
                }
            );

            // Create secure cookie with refresh token 
            res.cookie("jwt", refreshToken, {
                httpOnly: true, //accessible only by web server 
                secure: true, //https
                sameSite: "None", //cross-site cookie // allowing cross-site cookie because rest api and frontend hosted on different servers
                maxAge: process.env.EXPIRATION_REFRESH_TOKEN_COOKIE ?? 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match refreshToken // 1000 ms times etc.
            });

            // created user successfully
            res.status(201).json({ message: `Account successfully created`, accessToken });

            if (process.env.NODE_ENV === "production") {
                emailVerificationSender(email);
            }
        } else {
            res.status(400).json({ message: "Invalid user data received" });
        }
    } catch (err) {
        return res.status(400).send(parseError(err));
    }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    try {
        const {
            userId,
            username,
        } = req;
        const {
            newUsername,
            newEmail,
            newPassword,
        } = req.body;

        //check if all fields in body are present
        if (newUsername === undefined || newEmail === undefined || newPassword === undefined) {
            return res.status(400).json({ message: "Request body is missing fields" });
        }

        //find user in database
        const user = await User.findById(userId).exec();

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        //user wants to change username
        if (newUsername !== username) {
            //check if new username fits the schema
            await usernameschema.required().validateAsync(newUsername);
            //check if new username is already in use
            const duplicateUsername = await User.findOne({ username: newUsername }).collation({ locale: 'en', strength: 2 }).lean().exec();

            if (duplicateUsername && duplicateUsername?._id.toString() !== userId) {
                return res.status(409).json({ message: "Username already in use", context: { label: "newUsername" } });
            }
            //set new username
            user.username = newUsername;

            /* since no avatar upload possible right now a username change will also change avatar */
            /* get new profile picture */
            const firstLetterNewUsername = Array.from(newUsername)[0].toLowerCase();
            const newAvatarUrl = avatarUrlLookup[firstLetterNewUsername];

            //set new avatarUrl
            user.avatarUrl = newAvatarUrl;
            user.modifiedUserInfoAt = new Date();
        }

        //user wants to change email
        if (newEmail.toLowerCase() !== user.email) {
            //check if new email fits the schema
            await emailschema.required().validateAsync(newEmail);
            //check if new email is already in use
            const duplicateEmail = await User.findOne({ email: newEmail.toLowerCase() }).lean().exec();

            if (duplicateEmail && duplicateEmail?._id.toString() !== userId) {
                return res.status(409).json({ message: "Email already in use", context: { label: "newEmail" } });
            }
            //set new email
            user.email = newEmail.toLowerCase();
            user.modifiedUserInfoAt = new Date();
        }

        //user wants to change password
        if (newPassword !== "") {
            //check if new password fits the schema
            await passwordschema.label("newPassword").required().validateAsync(newPassword);
            //hash new password
            const newHashedPw = await bcrypt.hash(newPassword, parseInt(process.env.BCRYPT_SALT_ROUNDS));
            //set new password
            user.password = newHashedPw;
            user.modifiedUserInfoAt = new Date();
        }

        const updateUser = await user.save();

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "userId": updateUser._id,
                    "username": updateUser.username,
                    "email": updateUser.email,
                    "avatarUrl": updateUser.avatarUrl,
                    "roles": updateUser.roles,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.EXPIRATION_ACCESS_TOKEN ?? "15m"
            }
        );

        const refreshToken = jwt.sign(
            { "username": updateUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.EXPIRATION_REFRESH_TOKEN ?? "7d"
            }
        );

        // Create secure cookie with refresh token 
        res.cookie("jwt", refreshToken, {
            httpOnly: true, //accessible only by web server 
            secure: true, //https
            sameSite: "None", //cross-site cookie // allowing cross-site cookie because rest api and frontend hosted on different servers
            maxAge: process.env.EXPIRATION_REFRESH_TOKEN_COOKIE ?? 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match refreshToken // 1000 ms times etc.
        });

        res.status(200).json({ message: `${updateUser.username} updated`, accessToken });
    } catch (err) {
        return res.status(400).send(parseError(err));
    }
};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
    const {
        userId,
    } = req;
    const {
        password,
    } = req.body;

    const clientSession = await mongoose.startSession();

    try {
        clientSession.startTransaction();

        if (!password) {
            return res.status(400).json({ message: "No password field in request body", context: { label: "password" } });
        }

        //find user in database
        const user = await User.findById(userId).session(clientSession).exec();
        if (!user) {
            await clientSession.abortTransaction();
            return res.status(400).json({ message: "User not found" });
        }

        //check if password matches with user password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            await clientSession.abortTransaction();
            return res.status(401).json({ message: "Invalid password", context: { label: "password" } });
        }

        // Track users who commented on userpage or buildspages for updating totalComment
        const commentsByAuthor = {};

        // Get all comments of user
        const commentsOfUser = await Comment.find({ authorId: userId }).session(clientSession).lean().exec();
        if (commentsOfUser.length !== 0) {
            // iterate through commentsOfUser
            for (const { _id, parentId } of commentsOfUser) {
                // if it is a reply
                if (parentId) {
                    // get parent comment
                    const parentComment = await Comment.findById(parentId).session(clientSession);
                    // decrement totalReplies count
                    if (parentComment && parentComment.totalReplies > 0) {
                        parentComment.totalReplies -= 1;
                        await parentComment.save({ clientSession });
                    }
                }
                // delete all likes associated with the comment
                await CommentLike.deleteMany({ commentId: _id }).session(clientSession);
                // delete the comment itself
                await Comment.findByIdAndDelete(_id).session(clientSession);
            }
        }

        // Get all comments on users profile
        const commentsOnProfile = await Comment.find({ targetType: "User", targetId: userId }).session(clientSession).lean().exec();
        if (commentsOnProfile.length !== 0) {
            const commentsOnProfileIds = [];

            // Get all ids of the comments
            // Track users who commented on users profile for updating their totalComments
            for (const comment of commentsOnProfile) {
                commentsOnProfileIds.push(comment._id);

                const authorId = comment.authorId;
                if (authorId in commentsByAuthor) {
                    commentsByAuthor[authorId]++;
                } else {
                    commentsByAuthor[authorId] = 1;
                }
            }

            // Find all likes/dislikes associated with these comments and delete them
            await CommentLike.deleteMany({ commentId: { $in: commentsOnProfileIds } }).session(clientSession);
            // Delete all comments on users profile
            await Comment.deleteMany({ targetType: "User", targetId: userId }).session(clientSession);
        }

        // Get all builds of the user
        const userBuilds = await Build.find({ user: userId }).session(clientSession).lean().exec();
        if (userBuilds.length !== 0) {
            // Get all ids of the builds
            const userBuildsIds = userBuilds.map(build => build._id);

            // Get all comments on those builds pages
            const commentsToUserBuilds = await Comment.find({ targetType: "Build", targetId: { $in: userBuildsIds } }).session(clientSession).lean().exec();
            if (commentsToUserBuilds.length !== 0) {
                const commentsToUserBuildsIds = [];
                // Get all ids of the comments made on those builds page
                // Track users who commented on buildspages for updating their totalComments
                for (const comment of commentsToUserBuilds) {
                    commentsToUserBuildsIds.push(comment._id);

                    const authorId = comment.authorId;
                    if (authorId in commentsByAuthor) {
                        commentsByAuthor[authorId]++;
                    } else {
                        commentsByAuthor[authorId] = 1;
                    }
                }

                // Find all likes/dislikes associated with these comments and delete them
                await CommentLike.deleteMany({ commentId: { $in: commentsToUserBuildsIds } }).session(clientSession);
                // Delete all the comments made on those builds page
                await Comment.deleteMany({ targetType: "Build", targetId: { $in: userBuildsIds } }).session(clientSession);
            }

            // Get all stars to those builds
            const starsToUserBuilds = await Star.find({ buildId: { $in: userBuildsIds } }).session(clientSession).lean().exec();
            if (starsToUserBuilds.length !== 0) {
                // Count the total number of stars each user has given
                const userStarCounts = starsToUserBuilds.reduce((acc, star) => {
                    if (acc[star.userId]) {
                        acc[star.userId] += 1; // Increment star count for this user
                    } else {
                        acc[star.userId] = 1; // Initialize with 1 for this user
                    }
                    return acc;
                }, {});

                // Prepare bulk update operations to decrement users totalStarsGiven field
                const bulkUpdateOps = Object.entries(userStarCounts).map(([userId, starCount]) => ({
                    updateOne: {
                        filter: { _id: userId },
                        update: { $inc: { totalStarsGiven: -starCount } } // Decrement by total star count for each user
                    }
                }));

                // Execute bulk update
                await User.bulkWrite(bulkUpdateOps, { session: clientSession });

                // Delete stars
                await Star.deleteMany({ buildId: { $in: userBuildsIds } }).session(clientSession);
            }

            // Delete all the user's builds
            await Build.deleteMany({ user: userId }).session(clientSession);
        }

        // Update totalComments for each author who wrote comments on the user profile or user builds
        const bulkUpdateOps = Object.entries(commentsByAuthor).map(([authorId, decrementCount]) => ({
            updateOne: {
                filter: { _id: authorId },
                update: { $inc: { totalComments: -decrementCount } }
            }
        }));

        if (bulkUpdateOps.length > 0) {
            await User.bulkWrite(bulkUpdateOps, { session: clientSession });
        }

        // Handle user likes/dislikes
        // get all likes/dislikes placed by the user 
        const userLikes = await CommentLike.find({ userId: userId }).session(clientSession).lean().exec();
        if (userLikes.length !== 0) {
            const likeOps = userLikes.map(async ({ commentId, type }) => {
                const comment = await Comment.findById(commentId).session(clientSession);
                if (comment) {
                    if (type === "like" && comment.likes > 0) {
                        comment.likes -= 1;
                    } else if (type === "dislike" && comment.dislikes > 0) {
                        comment.dislikes -= 1;
                    }
                    await comment.save({ clientSession });
                }
            });
            await Promise.all(likeOps);
        }

        // Delete all likes/dislikes placed by the user
        await CommentLike.deleteMany({ userId: userId }).session(clientSession);

        // Handle all stars given by user
        // get all stars given by user
        const userStars = await Star.find({ userId }).session(clientSession).lean().exec();
        if (userStars.length !== 0) {
            // Prepare bulk update operations to decrement the stars count for each build
            const bulkUpdateOps = userStars.map((star) => ({
                updateOne: {
                    filter: { _id: star.buildId },
                    update: { $inc: { stars: -1 } }
                }
            }));

            // Execute bulk update on the builds
            await Build.bulkWrite(bulkUpdateOps, { session: clientSession });

            // Delete all the stars given by user
            await Star.deleteMany({ userId }).session(clientSession);
        }

        const deleteUsername = user.username;

        // Delete the user
        await user.deleteOne().session(clientSession);

        await clientSession.commitTransaction();
        res.status(200).json({ message: `User ${deleteUsername} deleted` });
    } catch (err) {
        await clientSession.abortTransaction();
        return res.status(400).json({ message: "Error deleting User" })
    } finally {
        clientSession.endSession();
    }
};

// @desc Get all builds of user by id
// @route GET /users/:id/builds
// @access Public
const getAllBuildsOfUser = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "Missing id parameter" });
        }

        await mongooseidschema.required().validateAsync(id);

        const user = await User.findById(id).lean().exec();

        if (!user) {
            return res.status(400).json({ message: "No user found" });
        }

        const builds = await Build.find({ user: id }).lean().exec();

        const { transformedBuilds, totalStars } = builds.reduce(
            (acc, build) => {
                // Transform the build and accumulate total stars
                acc.transformedBuilds.push({
                    ...build,
                    id: build._id.toString(),
                    authorId: user._id.toString(),
                    author: user.username,
                });
                acc.totalStars += build.stars;

                return acc;
            },
            { transformedBuilds: [], totalStars: 0 }
        );

        res.status(200).json({
            builds: transformedBuilds,
            totalBuilds: builds.length,
            totalStars,
        });
    } catch (err) {
        return res.status(500).json({ message: "Error retrieving builds of user" })
    }
}

// @desc Get all builds starred by user with id
// @route GET /users/:id/stars
// @access Public
const getAllStarredBuildsOfUser = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: "Missing id parameter" });
        }

        await mongooseidschema.required().validateAsync(id);

        const user = await User.findById(id).lean().exec();

        if (!user) {
            return res.status(400).json({ message: "No user found" });
        }

        const userStarsBuildIds = await Star.distinct("buildId", { userId: id }).exec();

        // Execute the query
        const starredBuilds = await Build.aggregate([
            // Match builds by their _id using the userStarsBuildIds array
            {
                $match: { _id: { $in: userStarsBuildIds } }
            },
            // Perform the lookup to fetch the user details
            {
                $lookup: {
                    from: "users", // Name of the user collection
                    localField: "user", // Field in Build collection
                    foreignField: "_id", // Field in User collection
                    as: "userDetails"
                }
            },
            { $unwind: "$userDetails" }, // Unwind the userDetails array to have a single document for sorting
            // Project the necessary fields
            {
                $project: {
                    _id: 1,
                    id: "$_id",
                    title: 1,
                    general: 1,
                    stats: 1,
                    armament: 1,
                    talisman: 1,
                    armor: 1,
                    modifiedByUserAt: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    level: 1,
                    stars: 1,
                    "authorId": "$userDetails._id",
                    "author": "$userDetails.username",
                }
            },
        ]);

        res.status(200).json({
            builds: starredBuilds,
            totalBuilds: starredBuilds.length,
        });
    } catch (err) {
        return res.status(500).json({ message: "Error retrieving starred builds of user" })
    }
}

export {
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
    getAllBuildsOfUser,
    getAllStarredBuildsOfUser,
};