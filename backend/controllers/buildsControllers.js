import { min } from "date-fns";
import Build from "../models/Build.js";

// @desc Get all builds
// @route GET /builds
// @access Public
const getAllBuilds = async (req, res) => {

};

// @desc Create new build
// @route POST /builds
// @access Private
const createNewBuild = async(req, res) => {
    const { user, general, stats } = req.body;

    if (general === undefined || stats === undefined || user === undefined) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    const { charactername, startingclass, greatrune, greatruneactive } = general;
    const { vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane } = stats;
    
    /* check structure of request body */
    if (charactername === undefined 
        || startingclass === undefined 
        || greatrune === undefined
        || greatruneactive === undefined) {
        return res.status(400).json({ message: "Missing entries in received data: general data object" });
    }

    if (vigor === undefined 
        || mind === undefined 
        || endurance === undefined
        || strength === undefined
        || dexterity === undefined 
        || intelligence === undefined 
        || faith === undefined
        || arcane === undefined) {
        return res.status(400).json({ message: "Missing entries in received data: stats data object" });
    }

    /* empty string characternames default to Tarnished */
    let validCharactername = charactername
    if (charactername === "") {
        validCharactername = "Tarnished";
    }

    const buildObject = {
        user,
        general: {
            charactername: validCharactername,
            startingclass,
            greatrune,
            greatruneactive
        },
        stats: {
            vigor,
            mind,
            endurance,
            strength,
            dexterity,
            intelligence,
            faith,
            arcane
        }
    }
    /* Create and store new user in DB */
    const build = await Build.create(buildObject);

    if (build) {
        // created user successfully
        res.status(201).json({ message: `New build of ${validCharactername} created` });
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