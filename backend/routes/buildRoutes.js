import express from "express";
import { getAllBuilds, createNewBuild, updateBuild, deleteBuild } from "../controllers/buildsController.js";
import checkBuildData from "../middleware/checkBuildData.js";
import verifyJWT from "../middleware/verifyJWT.js";
const router = express.Router();

router.route("/")
    .get(getAllBuilds)
    .post(verifyJWT, checkBuildData, createNewBuild)
    .patch(verifyJWT, checkBuildData, updateBuild)
    .delete(verifyJWT, deleteBuild);

export default router;