import express from "express";
import {
    addLike,
    createComment,
    deleteComment,
    deleteLike,
    getCommentById,
    getComments,
    getUserLikedComment,
    updateComment,
} from "../controllers/commentController";
const router = express.Router();

router.route("/")
    .get(getComments)
    .post(createComment) //make private

router.route("/:id")
    .get(getCommentById)
    .patch(updateComment) //make private
    .delete(deleteComment) //make private

router.route("/:id/like")
    .get(getUserLikedComment) //maybe private???
    .post(addLike) //make private
    .delete(deleteLike) //make private



export default router;