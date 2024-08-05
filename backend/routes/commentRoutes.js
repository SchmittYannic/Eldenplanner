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
    .delete(deleteComment) //make private

router.route("/:id/like")
    .get(getUserLikedComment) //maybe private???
    .post(addLike) //make private
    .delete(deleteLike) //make private

export default router;