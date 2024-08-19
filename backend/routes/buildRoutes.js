import express from "express";
import { createNewBuild, updateBuild, deleteBuild, getBuilds, getBuildById } from "../controllers/buildsController.js";
import checkBuildData from "../middleware/checkBuildData.js";
import verifyJWT from "../middleware/verifyJWT.js";
const router = express.Router();

router.route("/")
    .get(getBuilds)
    .post(verifyJWT, checkBuildData, createNewBuild)
    .patch(verifyJWT, checkBuildData, updateBuild)
    .delete(verifyJWT, deleteBuild);

router.route("/:id")
    .get(getBuildById)

export default router;