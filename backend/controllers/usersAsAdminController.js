import User from "../models/User.js";
import { deleteUserAndCleanup } from "../services/userService.js";
import { updateuserasadminschema } from "../validation/userschema.js";
import { parseError } from "../utils/helpers.js";

// @desc Get all users
// @route GET /users/admin
// @access Private
const getAllUsersAsAdmin = async (req, res) => {
    try {
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

        res.status(200).json(users);
    } catch (err) {
        return res.status(400).json({ message: "Error retrieving Userdata as Admin" })
    }
};

// @desc Update a user as admin
// @route PATCH /users/admin
// @access Private
const updateUserAsAdmin = async (req, res) => {
    try {
        const reqroles = req.roles;

        // If Admin is not inside the roles Array then request is unauthorized
        if (!reqroles.includes("Admin")) {
            return res.status(401).json({ message: "Unauthorized: only admins, no demoadmins" });
        }

        const {
            id,
            username,
            email,
            roles,
            active,
            validated,
        } = req.body;

        await updateuserasadminschema.validateAsync({
            id,
            username,
            email,
            roles,
            active,
            validated,
        });

        const user = await User.findById(id).exec();

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Check for duplicate
        const duplicateUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec();
        // Allow updates to the original user
        if (duplicateUsername && duplicateUsername?._id.toString() !== id) {
            return res.status(409).json({ message: "Username already in use", context: { label: "username" } });
        }

        const duplicateEmail = await User.findOne({ email: email.toLowerCase() }).lean().exec();

        if (duplicateEmail && duplicateEmail?._id.toString() !== id) {
            return res.status(409).json({ message: "Email already in use", context: { label: "email" } });
        }

        user.username = username;
        user.email = email.toLowerCase();
        user.roles = roles;
        user.active = active;
        user.validated = validated;
        user.modifiedUserInfoAt = new Date();

        const updateUser = await user.save();

        res.status(200).json({ message: `${updateUser.username} updated` });
    } catch (err) {
        return res.status(400).send(parseError(err));
    }
};

// @desc Delete a user as admin
// @route DELETE /users/admin
// @access Private
const deleteUserAsAdmin = async (req, res) => {
    const { id } = req.body;
    const { roles } = req;

    // If Admin is not inside the roles Array then request is unauthorized
    if (!roles.includes("Admin")) {
        return res.status(401).json({ message: "Unauthorized: only admins, no demoadmins" });
    }

    const result = await deleteUserAndCleanup(id);

    if (!result.success) {
        return res.status(result.statusCode).json({ message: result.message, ...(result.context && { context: result.context }) });
    }

    return res.status(result.statusCode).json({ message: `Username ${result.deletedUsername} with ID ${id} deleted` });
};

export {
    getAllUsersAsAdmin,
    updateUserAsAdmin,
    deleteUserAsAdmin,
}