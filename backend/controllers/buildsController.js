import Build from "../models/Build.js";
import User from "../models/User.js";

// @desc Get all builds
// @route GET /builds/old
// @access Public
const getAllBuilds = async (req, res) => {
    // select all builds
    // when not calling any methods like save later on and only want to get the data add a lean()
    const builds = await Build.find().lean().exec();
    if (!builds?.length) {
        return res.status(400).json({ message: "No builds found" });
    }
    res.status(200).json(builds);
};

// @desc Get builds for pagination
// @route GET /builds
// @access Public
const getBuilds = async (req, res) => {
    const {
        limit = 10,
        skip = 0,
        field = "stars",
        order = "asc",
        title = null,
        username = null,
        minLevel = 0,
        maxLevel = null,
        minStars = 0,
        maxStars = null,
    } = req.query;
    try {
        let filter = {};

        // Add title filter if provided
        if (title) {
            filter.title = { $regex: title, $options: "i" }; // Case-insensitive regex match
        }

        // Add username filter if provided
        if (username) {
            filter.username = { $regex: username, $options: "i" }; // Case-insensitive regex match
        }

        // Add level and star filter
        filter.level = { $gte: Number(minLevel) };
        filter.stars = { $gte: Number(minStars) };

        // Conditionally add the maxLevel filter if provided
        if (maxLevel !== null) {
            filter.level.$lte = Number(maxLevel);
        }

        // Conditionally add the maxStars filter if provided
        if (maxStars !== null) {
            filter.stars.$lte = Number(maxStars);
        }

        // Build the sort object
        let sort = {}

        // Apply sorting if a field is provided
        if (field) {
            const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;
            sort = { [field]: sortOrder }
        }

        // Execute the query
        const allBuilds = await Build.aggregate([
            {
                $lookup: {
                    from: "users", // Name of the user collection
                    localField: "user", // Field in Build collection
                    foreignField: "_id", // Field in User collection
                    as: "userDetails"
                }
            },
            { $unwind: "$userDetails" }, // Unwind the userDetails array to have a single document for sorting
            // Project the necessary fields
            {
                $project: {
                    _id: 1,
                    id: "$_id",
                    title: 1,
                    general: 1,
                    stats: 1,
                    armament: 1,
                    talisman: 1,
                    armor: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    level: 1,
                    stars: 1,
                    "user": "$userDetails._id",
                    "username": "$userDetails.username",
                }
            },
            { $match: filter },
            { $sort: sort },
            // { $skip: Number(skip) },
            // { $limit: Number(limit) }
        ]).collation({ locale: "en", strength: 2 });

        //get total amount of builds
        const totalBuilds = allBuilds.length

        //apply skip and limit
        const builds = allBuilds.slice(skip, skip + limit);

        // Send the response
        res.status(200).json({ builds, totalBuilds });
    } catch (err) {
        res.status(500).json({ message: "Error retrieving builds" });
    }
}

// @desc Create new build
// @route POST /builds
// @access Private
const createNewBuild = async (req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { userId, title, data } = req.body;

    if (!userId) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    if (!title) {
        return res.status(400).json({ message: "Build title is required", context: { label: "buildtitle" } });
    }

    const { general, stats, armament, talisman, armor } = data;

    const { charactername } = general;

    const user = await User.findById(userId).lean().exec();

    if (!user) {
        return res.status(400).json({ message: "No corresponding user was found in database" });
    }

    /* only allow active users to save builds. */
    if (!user.active) {
        return res.status(400).json({ message: "Your account is blocked from saving new builds. Please get in touch with support." });
    }

    /* check if user is below buildLimit. Maximum of 20 builds per account by default unless changed in .env */
    const builds = await Build.find({ user: userId }).exec();
    const buildsCount = builds.length;

    const buildLimit = (process.env.BUILD_LIMIT_PER_ACCOUNT | 0) ?? 20;
    if (buildsCount >= buildLimit) {
        return res.status(400).json({ message: "You are exceeding the buildlimit. Max 20 builds per account." });
    }

    /* empty string characternames default to Tarnished */
    let validCharactername = charactername
    if (charactername === "") {
        validCharactername = "Tarnished";
    }

    /* create buildObject to send to DB */
    const buildObject = {
        user: userId,
        title,
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
        res.status(201).json({ message: `New build ${build.title} created`, action: build._id });
    } else {
        res.status(400).json({ message: "Invalid build data received" });
    }
};

// @desc Update a build
// @route PATCH /builds
// @access Private
const updateBuild = async (req, res) => {
    /* the data objects validity gets checked beforehand by the middleware checkBuildData */
    const { buildId, userId, title, data } = req.body;

    if (!userId || !buildId) {
        return res.status(400).json({ message: "Missing entries in received request body" });
    }

    if (!title) {
        return res.status(400).json({ message: "Build title is required", context: { label: "buildtitle" } });
    }

    const build = await Build.findById(buildId).exec();

    if (!build) {
        return res.status(400).json({ message: "Build not found" });
    }

    if (!build.user.equals(userId)) {
        return res.status(401).json({ message: "User unauthorized" });
    }

    build.title = title;

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
        res.status(200).json({ message: `Build ${updatedBuild.title} updated` });
    } else {
        res.status(400).json({ message: "Failed to write changes into database" });
    }
};

// @desc Delete a build
// @route DELETE /builds
// @access Private
const deleteBuild = async (req, res) => {

    const { userId } = req;
    const { buildId } = req.body;

    /* Confirm data */
    if (!buildId) {
        return res.status(400).json({ message: "Build ID Required" });
    }

    /* check if build is in database */
    const build = await Build.findById(buildId).exec();

    if (!build) {
        return res.status(400).json({ message: "Build not found" });
    }

    /* check if user sending request is the build author */
    const isBuildAuthor = build.user.equals(userId);

    if (!isBuildAuthor) {
        return res.status(401).json({ message: "Unauthorized to delete build" });
    }

    const result = await build.deleteOne();

    if (result) {
        res.status(200).json({ message: `Build ${result.title} deleted` });
    } else {
        return res.status(400).json({ message: "Failed to delete Build from database" });
    }
};

export {
    getAllBuilds,
    getBuilds,
    createNewBuild,
    updateBuild,
    deleteBuild
}