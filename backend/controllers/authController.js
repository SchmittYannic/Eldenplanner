import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Login
// @route POST /auth
// @access Public
const login = async (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const foundUsername = await User.findOne({ username: user }).exec();
    const foundEmail = await User.findOne({ email: user }).exec();
    const foundUser = foundUsername ?? foundEmail;

    if (!foundUser) {
        return res.status(401).json({ message: "No User with this username or email found" });
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) return res.status(401).json({ message: "wrong password" });

    // to create an ACCESS_TOKEN_SECRET key in .env you can use
    // require("crypto").randomBytes(64).toString("hex");
    // inside the node terminal to create a random key
    // open node terminal by typing node into the terminal
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "userId": foundUser._id,
                "username": foundUser.username,
                "roles": foundUser.roles,
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
        { "username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    );

    // Create secure cookie with refresh token 
    res.cookie("jwt", refreshToken, {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: "None", //cross-site cookie // allowing cross-site cookie because rest api and frontend hosted on different servers
        maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match refreshToken // 1000 ms times etc.
    });

    // Send accessToken containing username and roles 
    res.json({ accessToken });
};

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized - no refresh token" });

    const refreshToken = cookies.jwt;

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.status(403).json({ message: "Forbidden" });

            const foundUser = await User.findOne({ username: decoded.username }).exec();

            if (!foundUser) return res.status(401).json({ message: "Unauthorized - User not found in database" });

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userId": foundUser._id,
                        "username": foundUser.username,
                        "roles": foundUser.roles,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "15m" }
            );

            res.json({ accessToken });
        }
    );
};

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.json({ message: "Cookie cleared" });
};

export {
    login,
    refresh,
    logout,
};