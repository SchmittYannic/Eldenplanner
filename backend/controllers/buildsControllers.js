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
    /* confirm data from request body */
    const { userId, data } = req.body;

    if (!userId || !data) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    const { general, stats, armament, talisman, armor } = data;

    if (!general || !stats || !armament || !talisman || !armor) {
        return res.status(400).json({ message: "Missing entries in received data object" });
    }

    const { charactername, startingclass, greatrune, greatruneactive } = general;

    if (charactername === undefined, !startingclass, greatrune === undefined, greatruneactive === undefined) {
        return res.status(400).json({ message: "Missing entries in received general data object" });
    }

    const { vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane } = stats;

    if (!vigor || !mind || !endurance || !strength || !dexterity || !intelligence || !faith || !arcane) {
        return res.status(400).json({ message: "Missing entries in received stats data object" });
    }

    const { lefthand1, lefthand2, lefthand3, righthand1, righthand2, righthand3, twohand } = armament;

    if (!lefthand1 || !lefthand2 || !lefthand3 || !righthand1 || !righthand2 || !righthand3 || twohand === undefined) {
        return res.status(400).json({ message: "Missing entries in received armament data object" });
    }

    if (lefthand1.weapon === undefined 
        || lefthand1.aow === undefined 
        || lefthand1.upgrade === undefined 
        || lefthand1.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received lefthand1 data object" });
    }

    if (lefthand2.weapon === undefined 
        || lefthand2.aow === undefined 
        || lefthand2.upgrade === undefined 
        || lefthand2.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received lefthand2 data object" });
    }

    if (lefthand3.weapon === undefined 
        || lefthand3.aow === undefined 
        || lefthand3.upgrade === undefined 
        || lefthand3.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received lefthand3 data object" });
    }

    if (righthand1.weapon === undefined 
        || righthand1.aow === undefined 
        || righthand1.upgrade === undefined 
        || righthand1.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received righthand1 data object" });
    }

    if (righthand2.weapon === undefined 
        || righthand2.aow === undefined 
        || righthand2.upgrade === undefined 
        || righthand2.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received righthand2 data object" });
    }

    if (righthand3.weapon === undefined 
        || righthand3.aow === undefined 
        || righthand3.upgrade === undefined 
        || righthand3.affinity === undefined) {
            return res.status(400).json({ message: "Missing entries in received righthand3 data object" });
    }

    if (talisman.talisman1 === undefined 
        || talisman.talisman2 === undefined 
        || talisman.talisman3 === undefined 
        || talisman.talisman4 === undefined) {
            return res.status(400).json({ message: "Missing entries in received talisman data object" });
    }

    if (armor.head === undefined 
        || armor.chest === undefined 
        || armor.hands === undefined 
        || armor.legs === undefined) {
            return res.status(400).json({ message: "Missing entries in received armor data object" });
    }

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

};

// @desc Delete a build
// @route DELETE /builds
// @access Private
const deleteBuild = async (req, res) => {

};

export {
    getAllBuilds,
    createNewBuild,
    updateBuild,
    deleteBuild
}