import express from "express";
import {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
} from "../controllers/usersController.js";
import {
    getAllUsersAsAdmin,
    updateUserAsAdmin,
} from "../controllers/usersAsAdminController.js";
import verifyJWT from "../middleware/verifyJWT.js";
const router = express.Router();

router.route("/")
    .get(getAllUsers)
    .post(createNewUser)
    .patch(updateUser)
    .delete(deleteUser);

router.route("/admin")
    .get(verifyJWT, getAllUsersAsAdmin)
    .patch(verifyJWT, updateUserAsAdmin)

export default router;