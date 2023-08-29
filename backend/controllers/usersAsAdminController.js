import User from "../models/User.js";
import bcrypt from "bcrypt";
import * as EmailValidator from "email-validator";

// @desc Get all users
// @route GET /users/admin
// @access Private
const getAllUsersAsAdmin = async (req, res) => {

    const roles = req.roles;

    // If Admin and Demoadmin is not inside the roles Array then request is unauthorized
    if (!roles.includes("Admin") && !roles.includes("Demoadmin")) {
        return res.status(401).json({ message: "Unauthorized: only admins and demoadmins" });
    }

    // select all users username and creation date, who arent admins or demoadmins
    const users = await User.find().select("-password").lean();
    if (!users?.length) {
        return res.status(400).json({ message: "No users found" });
    }

    res.json(users);
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUserAsAdmin = async (req, res) => {

    const reqroles = req.roles;

    // If Admin is not inside the roles Array then request is unauthorized
    if (!reqroles.includes("Admin")) {
        return res.status(401).json({ message: "Unauthorized: only admins, no demoadmins" });
    }

    const { id, username, email, roles, active, validated } = req.body;

    // Confirm data
    if (!id || !username || !email || !roles || typeof active !== "boolean" || typeof validated !== "boolean") {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (!roles.length) {
        return res.status(400).json({ message: "User needs atleast one role" });
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    // Check for duplicate
    const duplicateUsername = await User.findOne({ username }).lean().exec();
    // Allow updates to the original user
    if (duplicateUsername && duplicateUsername?._id.toString() !== id) {
        return res.status(409).json({ message: "Username already in use" });
    }

    const duplicateEmail = await User.findOne({ email }).lean().exec();
    
    if (duplicateEmail && duplicateEmail?._id.toString() !== id) {
        return res.status(409).json({ message: "Email already in use" });
    }

    const validUsernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,19}$/;
    const isValidUsername = validUsernameRegex.test(username);

    if (!isValidUsername) {
        return res.status(400).json({ message: "Invalid username received" });
    }

    if (!EmailValidator.validate(email)) {
        return res.status(400).json({ message: "Invalid email address received" });
    }

    user.username = username;
    user.email = email;
    user.roles = roles;
    user.active = active;
    user.validated = validated;

    const updateUser = await user.save();

    res.status(200).json({ message: `${updateUser.username} updated`});
};

export {
    getAllUsersAsAdmin,
    updateUserAsAdmin,
}