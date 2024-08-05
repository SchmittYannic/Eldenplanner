import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import {
    addLike,
    createComment,
    deleteComment,
    deleteLike,
    getCommentById,
    getComments,
    getUserLikedComment,
    updateComment,
} from "../controllers/commentController.js";
const router = express.Router();

router.route("/")
    .get(getComments)
    .post(verifyJWT, createComment)

router.route("/:id")
    .get(getCommentById)
    .patch(verifyJWT, updateComment)
    .delete(verifyJWT, deleteComment)

router.route("/:id/like")
    .get(getUserLikedComment) //maybe private???
    .post(verifyJWT, addLike)
    .delete(verifyJWT, deleteLike)

export default router;