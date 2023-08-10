import express from "express";
import { getAllBuilds, createNewBuild, updateBuild, deleteBuild } from "../controllers/buildsControllers.js";
const router = express.Router();

router.route("/")
    .get(getAllBuilds)
    .post(createNewBuild)
    .patch(updateBuild)
    .delete(deleteBuild);

export default router;