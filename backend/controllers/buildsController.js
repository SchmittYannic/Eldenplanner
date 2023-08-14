import Build from "../models/Build.js";
import User from "../models/User.js";

// @desc Get all builds
// @route GET /builds
// @access Public
const getAllBuilds = async (req, res) => {
    // select all builds
    // when not calling any methods like save later on and only want to get the data add a lean()
    const builds = await Build.find().lean().exec();
    if (!builds?.length) {
        return res.status(400).json({ message: "No builds found" });
    }
    res.json(builds);
};

// @desc Create new build
// @route POST /builds
// @access Private
const createNewBuild = async(req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { userId, data } = req.body;

    if (!userId) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    const { general, stats, armament, talisman, armor } = data;

    const { charactername } = general;

    const user = await User.findById(userId).lean().exec();

    if (!user) {
        return res.status(400).json({ message: "No corresponding user was found in database" });
    }


    /* empty string characternames default to Tarnished */
    let validCharactername = charactername
    if (charactername === "") {
        validCharactername = "Tarnished";
    }

    /* create buildObject to send to DB */
    const buildObject = {
        user: userId,
        general: {
            charactername: validCharactername,
            startingclass: general.startingclass,
            greatrune: general.greatrune,
            greatruneactive: general.greatruneactive
        },
        stats,
        armament,
        talisman,
        armor
    };

    /* Create and store new build in DB */
    const build = await Build.create(buildObject);

    if (build) {
        // created build successfully
        res.status(201).json({ message: `New build of ${validCharactername} created by user ${user.username}` });
    } else {
        res.status(400).json({ message: "Invalid build data received" });
    }
};

// @desc Update a build
// @route PATCH /builds
// @access Private
const updateBuild = async (req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { buildId, userId, data } = req.body;

    if (!userId || !buildId) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    const build = await Build.findById(buildId).exec();

    if (!build) {
        return res.status(400).json({ message: "Build not found" });
    }

    /* check for empty charactername */
    if (data.general.charactername === "") {
        build.general = {
            charactername: "Tarnished",
            startingclass: data.general.startingclass,
            greatrune: data.general.greatrune,
            greatruneactive: data.general.greatruneactive
        }
    } else {
        build.general = data.general;
    }

    build.stats = data.stats;
    build.armament = data.armament;
    build.talisman = data.talisman;
    build.armor = data.armor;

    const updatedBuild = await build.save();

    if (updatedBuild) {
        res.json({ message: `Build ${updatedBuild._id} updated`});
    } else {
        res.status(400).json({ message: "Failed to write changes into database" });
    }
};

// @desc Delete a build
// @route DELETE /builds
// @access Private
const deleteBuild = async (req, res) => {
    const { buildId } = req.body;

    if (!buildId) {
        return res.status(400).json({ message: "Build ID Required" });
    }

    // Check if user has Builds attached to him in the future.

    const build = await Build.findById(buildId).exec();

    if (!build) {
        return res.status(400).json({ message: "Build not found" });
    }

    const result = await build.deleteOne();

    if (result) {
        res.json(`Build ${result._id} deleted`);
    } else {
        return res.status(400).json({ message: "Failed to delete Build from database" });
    }
};

export {
    getAllBuilds,
    createNewBuild,
    updateBuild,
    deleteBuild
}