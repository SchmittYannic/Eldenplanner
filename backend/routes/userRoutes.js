import express from "express";
import {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
} from "../controllers/usersController.js";
import {
    getAllUsersAsAdmin,
    updateUserAsAdmin,
    deleteUserAsAdmin,
} from "../controllers/usersAsAdminController.js";
import verifyJWT from "../middleware/verifyJWT.js";
import { signupLimiter } from "../middleware/rateLimiters.js";
const router = express.Router();

router.route("/")
    .get(getAllUsers)
    .post(signupLimiter, createNewUser)
    .patch(verifyJWT, updateUser)
    .delete(deleteUser);

router.route("/admin")
    .get(verifyJWT, getAllUsersAsAdmin)
    .patch(verifyJWT, updateUserAsAdmin)
    .delete(verifyJWT, deleteUserAsAdmin);

export default router;