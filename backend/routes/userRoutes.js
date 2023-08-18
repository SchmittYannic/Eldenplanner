import express from "express";
import {
    getAllUsersAsAdmin,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
} from "../controllers/usersController.js";
import verifyJWT from "../middleware/verifyJWT.js";
const router = express.Router();

router.route("/")
    .get(getAllUsers)
    .post(createNewUser)
    .patch(updateUser)
    .delete(deleteUser);

router.route("/admin")
    .get(verifyJWT, getAllUsersAsAdmin)

export default router;