import express from "express";
import {
    createNewBuild,
    updateBuild,
    deleteBuild,
    getBuilds,
    getBuildById,
    addStar,
    deleteStar,
} from "../controllers/buildsController.js";
import checkBuildData from "../middleware/checkBuildData.js";
import verifyJWT from "../middleware/verifyJWT.js";
import extractJWTInfo from "../middleware/extractJWTInfo.js";
const router = express.Router();

router.route("/")
    .get(getBuilds)
    .post(verifyJWT, checkBuildData, createNewBuild)
    .patch(verifyJWT, checkBuildData, updateBuild)
    .delete(verifyJWT, deleteBuild);

router.route("/:id")
    .get(extractJWTInfo, getBuildById)

router.route("/:id/star")
    .post(verifyJWT, addStar)
    .delete(verifyJWT, deleteStar)

export default router;