import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import {
    addLike,
    createComment,
    deleteComment,
    deleteLike,
    getComments,
    updateComment,
} from "../controllers/commentController.js";
const router = express.Router();

router.route("/")
    .get(getComments)
    .post(verifyJWT, createComment)

router.route("/:id")
    .patch(verifyJWT, updateComment)
    .delete(verifyJWT, deleteComment)

router.route("/:id/like")
    .post(verifyJWT, addLike)
    .delete(verifyJWT, deleteLike)

export default router;