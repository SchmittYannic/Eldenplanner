/*
    This middleware checks the data object inside the req.body.
    It will only call the next function, if the data object holds
    all of the necessary build data in the right structure.
*/
const checkBuildData = (req, res, next) => {
    const { data } = req.body;

    if (!data) {
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

    next();
};

export default checkBuildData