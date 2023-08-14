import express from "express";
import { getAllBuilds, createNewBuild, updateBuild, deleteBuild } from "../controllers/buildsController.js";
import checkBuildData from "../middleware/checkBuildData.js";
const router = express.Router();

router.route("/")
    .get(getAllBuilds)
    .post(checkBuildData, createNewBuild)
    .patch(checkBuildData, updateBuild)
    .delete(deleteBuild);

export default router;