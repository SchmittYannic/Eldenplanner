import User from "../models/User.js";
import bcrypt from "bcrypt";

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
    // select all users without password
    // when not calling any methods like save later on and only want to get the data add a lean()
    const users = await User.find().select("-password").lean();
    if (!users?.length) {
        return res.status(400).json({ message: "No users found" });
    }
    res.json(users);
};

// @desc Create new user
// @route POST /users
// @access Public
const createNewUser = async (req, res) => {
    const { username, password, email } = req.body;

    /* Confirm data */
    if (!username || !password || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    /* Check for duplicate */
    // if you use async await and expect a promise back u should use exec at the end.
    // collation to make sure it is case insensitive -> Hank and hank count as duplicates
    const duplicateUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec();

    if (duplicateUsername) {
        return res.status(409).json({ message: "Duplicate username" });
    }

    const duplicateEmail = await User.findOne({ email }).lean().exec();

    if (duplicateEmail) {
        return res.status(409).json({ message: "Duplicate email" });
    }

    /* Hash password */
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

    const userObject = { username, "password": hashedPwd, email };

    /* Create and store new user in DB */
    const user = await User.create(userObject);

    if (user) {
        // created user successfully
        res.status(201).json({ message: `New user ${username} created` });
    } else {
        res.status(400).json({ message: "Invalid user data received" });
    }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    const { id, username, email, roles, active, password, validated } = req.body;

    // Confirm data
    if (!id || !username || !email || !roles.length || typeof active !== "boolean" || typeof validated !== "boolean") {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    // Check for duplicate
    const duplicateUsername = await User.findOne({ username }).lean().exec();
    // Allow updates to the original user
    if (duplicateUsername && duplicateUsername?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate username" });
    }

    const duplicateEmail = await User.findOne({ email }).lean().exec();
    
    if (duplicateEmail && duplicateEmail?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate email" });
    }

    user.username = username;
    user.email = email;
    user.roles = roles;
    user.active = active;
    user.validated = validated;

    if (password) {
        // Has password
        user.password = await bcrypt.hash(password, 10);
    }

    const updateUser = await user.save();

    res.json({ message: `${updateUser.username} updated`});
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