import User from "../models/User.js";
import bcrypt from "bcrypt";
import * as EmailValidator from "email-validator";

const checkNewUserData = async (req, res, next) => {
    const { username, password, email } = req.body;

    /* Confirm data */
    if (!username || !password || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const validUsernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,19}$/;
    const isValidUsername = validUsernameRegex.test(username);

    if (!isValidUsername) {
        return res.status(400).json({ message: "Invalid username received" });
    }

    /* Check for duplicate */
    // if you use async await and expect a promise back u should use exec at the end.
    // collation to make sure it is case insensitive -> Hank and hank count as duplicates
    const duplicateUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec();

    if (duplicateUsername) {
        return res.status(409).json({ message: "Username already in use" });
    }

    const duplicateEmail = await User.findOne({ email }).lean().exec();

    if (duplicateEmail) {
        return res.status(409).json({ message: "Email already in use" });
    }

    if (!EmailValidator.validate(email)) {
        return res.status(400).json({ message: "Invalid email address received" });
    }

    /* Hash password */
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

    const userObject = { username, "password": hashedPwd, email };

    req.userData = userObject;

    next();
};

export default checkNewUserData