import express from "express";
import { getAllBuilds, createNewBuild, updateBuild, deleteBuild } from "../controllers/buildsControllers.js";
import checkBuildData from "../middleware/checkBuildData.js";
const router = express.Router();

router.route("/")
    .get(getAllBuilds)
    .post(checkBuildData, createNewBuild)
    .patch(checkBuildData, updateBuild)
    .delete(deleteBuild);

export default router;