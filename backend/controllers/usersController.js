import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import User from "../models/User.js";
import emailVerificationSender from "../middleware/emailVerificationSender.js";

// @desc Get all users
// @route GET /users
// @access Public
const getAllUsers = async (req, res) => {
    // select all users username and creation date
    // when not calling any methods like save later on and only want to get the data add a lean()
    const users = await User.find().select("username createdAt").lean();
    if (!users?.length) {
        return res.status(400).json({ message: "No users found" });
    }

    res.status(200).json(users);
};

// @desc Create new user
// @route POST /users
// @access Public
const createNewUser = async (req, res) => {
    const userObject = req.userData;
    /* Create and store new user in DB */
    const user = await User.create(userObject);

    if (user) {
        // created user successfully
        res.status(201).json({ message: `New user ${userObject.username} created` });
        emailVerificationSender(userObject.email);
    } else {
        res.status(400).json({ message: "Invalid user data received" });
    }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    const { userId, username } = req
    const { newUsername, newEmail, newPassword } = req.body

    if (!newUsername) {
        return res.status(400).json({ message: "Username field is required" });
    }

    if (!newEmail) {
        return res.status(400).json({ message: "Email field is required" });
    }

    const validUsernameRegex = /^[A-Za-z][A-Za-z0-9_]{3,19}$/;
    const isValidUsername = validUsernameRegex.test(newUsername);

    if (!isValidUsername) {
        return res.status(400).json({ message: "Invalid username received", action: "showRequirements" });
    }

    if (!EmailValidator.validate(newEmail)) {
        return res.status(400).json({ message: "Invalid email address received" });
    }

    const user = await User.findById(userId).exec();

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const duplicateUsername = await User.findOne({ email: newUsername }).lean().exec();

    if (duplicateUsername && duplicateUsername?._id.toString() !== userId) {
        return res.status(409).json({ message: "Username already taken" });
    }

    const duplicateEmail = await User.findOne({ email: newEmail }).lean().exec();
    
    if (duplicateEmail && duplicateEmail?._id.toString() !== userId) {
        return res.status(409).json({ message: "Email already in use" });
    }

    if (username !== newUsername) {
        user.username = newUsername;
    }

    if(user.email !== newEmail) {
        user.email = newEmail;
    }

    if (newPassword) {
        user.password = await bcrypt.hash(newPassword, 10);
    }

    const updateUser = await user.save();

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "userId": updateUser._id,
                "username": updateUser.username,
                "email": updateUser.email,
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
};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "User ID Required" });
    }

    // Check if user has Builds attached to him in the future.

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const result = await user.deleteOne();

    const reply = `Username ${result.username} with ID ${result._id} deleted`;

    res.json(reply);
};

export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};