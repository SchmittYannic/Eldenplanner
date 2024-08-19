import Build from "../models/Build.js";
import User from "../models/User.js";
import { mongooseidschema } from "../validation/userschema.js";
import { parseError } from "../utils/helpers.js";

// @desc Get all builds
// @route GET /builds/old
// @access Public
const getAllBuilds = async (req, res) => {
    // select all builds
    // when not calling any methods like save later on and only want to get the data add a lean()
    const builds = await Build.find().lean().exec();
    if (!builds?.length) {
        return res.status(400).json({ message: "No builds found" });
    }
    res.status(200).json(builds);
};

// @desc Get builds for pagination
// @route GET /builds
// @access Public
const getBuilds = async (req, res) => {
    const {
        limit = 10,
        skip = 0,
        field = "stars",
        order = "asc",
        title = null,
        author = null,
        minLevel = 0,
        maxLevel = null,
        minStars = 0,
        maxStars = null,
    } = req.query;
    try {
        let filter = {};

        // Add title filter if provided
        if (title) {
            filter.title = { $regex: title, $options: "i" }; // Case-insensitive regex match
        }

        // Add author filter if provided
        if (author) {
            filter.author = { $regex: author, $options: "i" }; // Case-insensitive regex match
        }

        // Add level and star filter
        filter.level = { $gte: Number(minLevel) };
        filter.stars = { $gte: Number(minStars) };

        // Conditionally add the maxLevel filter if provided
        if (maxLevel !== null) {
            filter.level.$lte = Number(maxLevel);
        }

        // Conditionally add the maxStars filter if provided
        if (maxStars !== null) {
            filter.stars.$lte = Number(maxStars);
        }

        // Build the sort object
        let sort = {}

        // Apply sorting if a field is provided
        if (field) {
            const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;
            sort = { [field]: sortOrder }
        }

        // Execute the query
        const allBuilds = await Build.aggregate([
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
                    createdAt: 1,
                    updatedAt: 1,
                    level: 1,
                    stars: 1,
                    "authorId": "$userDetails._id",
                    "author": "$userDetails.username",
                }
            },
            { $match: filter },
            { $sort: sort },
            // { $skip: Number(skip) },
            // { $limit: Number(limit) }
        ]).collation({ locale: "en", strength: 2 });

        //get total amount of builds
        const totalBuilds = allBuilds.length

        //apply skip and limit
        const builds = allBuilds.slice(skip, skip + limit);

        // Send the response
        res.status(200).json({ builds, totalBuilds });
    } catch (err) {
        res.status(500).json({ message: "Error retrieving builds" });
    }
};

// @desc Get build using its id
// @route GET /builds/:id
// @access Public
const getBuildById = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "Missing id parameter" });
        }

        await mongooseidschema.required().validateAsync(id);

        const build = await Build
            .findById(id)
            .populate({
                path: "user",
                select: "username"
            })
            .lean()
            .exec();

        if (!build) {
            return res.status(400).json({ message: "Build not found" });
        }

        const transformedBuild = {
            ...build,
            id: build._id.toString(),
            authorId: build.user._id.toString(),
            author: build.user.username,
        };

        res.status(200).json(transformedBuild);
    } catch (err) {
        res.status(500).send(parseError(err));
    }
};

// @desc Create new build
// @route POST /builds
// @access Private
const createNewBuild = async (req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { userId, title, data } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({ message: "Missing entries in received request body" });
        }

        if (!title) {
            return res.status(400).json({ message: "Build title is required", context: { label: "buildtitle" } });
        }

        const { general, stats, armament, talisman, armor } = data;

        const { charactername } = general;

        const user = await User.findById(userId).lean().exec();

        if (!user) {
            return res.status(400).json({ message: "No corresponding user found in database" });
        }

        /* only allow active users to save builds. */
        if (!user.active) {
            return res.status(400).json({ message: "Your account is blocked from saving new builds. Please get in touch with support." });
        }

        /* check if user is below buildLimit. Maximum of 20 builds per account by default unless changed in .env */
        const builds = await Build.find({ user: userId }).exec();
        const buildsCount = builds.length;

        const buildLimit = (process.env.BUILD_LIMIT_PER_ACCOUNT | 0) ?? 20;
        if (buildsCount >= buildLimit) {
            return res.status(400).json({ message: `You are exceeding the buildlimit. Max ${buildLimit} builds per account.` });
        }

        /* empty string characternames default to Tarnished */
        let validCharactername = charactername
        if (charactername === "") {
            validCharactername = "Tarnished";
        }

        const level = stats.vigor + stats.mind + stats.endurance + stats.strength + stats.dexterity + stats.intelligence + stats.faith + stats.arcane - 79;

        /* create buildObject to send to DB */
        const buildObject = {
            user: userId,
            title,
            level,
            general: {
                charactername: validCharactername,
                startingclass: general.startingclass,
                greatrune: general.greatrune,
                greatruneactive: general.greatruneactive
            },
            stats,
            armament,
            talisman,
            armor
        };

        /* Create and store new build in DB */
        const build = await Build.create(buildObject);

        res.status(201).json({ message: `New build ${build.title} created`, action: build._id });
    } catch (err) {
        res.status(500).json({ message: "Error creating new Build" });
    }
};

// @desc Update a build
// @route PATCH /builds
// @access Private
const updateBuild = async (req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { buildId, userId, title, data } = req.body;
    try {
        if (!userId || !buildId) {
            return res.status(400).json({ message: "Missing entries in received request body" });
        }

        if (!title) {
            return res.status(400).json({ message: "Build title is required", context: { label: "buildtitle" } });
        }

        const build = await Build.findById(buildId).exec();

        if (!build) {
            return res.status(400).json({ message: "Build not found" });
        }

        if (!build.user.equals(userId)) {
            return res.status(401).json({ message: "User unauthorized" });
        }

        build.title = title;

        const { general, stats, armament, talisman, armor } = data;

        /* check for empty charactername */
        if (general.charactername === "") {
            build.general = {
                charactername: "Tarnished",
                startingclass: general.startingclass,
                greatrune: general.greatrune,
                greatruneactive: general.greatruneactive
            }
        } else {
            build.general = general;
        }

        const level = stats.vigor + stats.mind + stats.endurance + stats.strength + stats.dexterity + stats.intelligence + stats.faith + stats.arcane - 79;

        build.level = level;
        build.stats = stats;
        build.armament = armament;
        build.talisman = talisman;
        build.armor = armor;

        const updatedBuild = await build.save();

        res.status(200).json({ message: `Build ${updatedBuild.title} updated` });
    } catch (err) {
        res.status(500).json({ message: "Error updating Build" });
    }
};

// @desc Delete a build
// @route DELETE /builds
// @access Private
const deleteBuild = async (req, res) => {

    const { userId } = req;
    const { buildId } = req.body;

    /* Confirm data */
    if (!buildId) {
        return res.status(400).json({ message: "Build ID Required" });
    }

    /* check if build is in database */
    const build = await Build.findById(buildId).exec();

    if (!build) {
        return res.status(400).json({ message: "Build not found" });
    }

    /* check if user sending request is the build author */
    const isBuildAuthor = build.user.equals(userId);

    if (!isBuildAuthor) {
        return res.status(401).json({ message: "Unauthorized to delete build" });
    }

    const result = await build.deleteOne();

    if (result) {
        res.status(200).json({ message: `Build ${result.title} deleted` });
    } else {
        return res.status(400).json({ message: "Failed to delete Build from database" });
    }
};

export {
    getAllBuilds,
    getBuilds,
    getBuildById,
    createNewBuild,
    updateBuild,
    deleteBuild
}