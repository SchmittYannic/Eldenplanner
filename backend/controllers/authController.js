import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import nodemailer from "nodemailer";
import User from "../models/User.js";
import Tokens from "../models/Tokens.js";
import emailVerificationSender from "../middleware/emailVerificationSender.js";
import { logEvents } from "../middleware/logger.js";

// from: https://stackoverflow.com/questions/69504697/express-rate-limit-for-login-route
let knownIps = new Map();

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

    if (!match) {
        if (knownIps.has(req.ip)) {
            const { lastUnsuccessfulAttempt, countUnsuccessfulAttempts } = knownIps.get(req.ip);
            const now = new Date();
            const sinceLastFailedAttempt = (now - lastUnsuccessfulAttempt) / (1000 * 60 * 30);

            if (sinceLastFailedAttempt >= 1) {
                // if last attempt was far enough in the past reset entry
                knownIps.set(req.ip, {lastUnsuccessfulAttempt: new Date(), countUnsuccessfulAttempts: 1});
            } else if (countUnsuccessfulAttempts >= 3) {
                // else check if attempts exceed limit of 3
                knownIps.set(req.ip, {lastUnsuccessfulAttempt: new Date(), countUnsuccessfulAttempts: countUnsuccessfulAttempts + 1})
                return res.status(429).json({ message: "Too many failed login attempts" })
            } else {
                // else increase count
                knownIps.set(req.ip, {lastUnsuccessfulAttempt: new Date(), countUnsuccessfulAttempts: countUnsuccessfulAttempts + 1})
            }
        } else {
            // if ip not known add it to map
            knownIps.set(req.ip, {lastUnsuccessfulAttempt: new Date(), countUnsuccessfulAttempts: 1})
        }
        return res.status(401).json({ message: "wrong password" });
    }

    // to create an ACCESS_TOKEN_SECRET key in .env you can use
    // require("crypto").randomBytes(64).toString("hex");
    // inside the node terminal to create a random key
    // open node terminal by typing node into the terminal
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "userId": foundUser._id,
                "username": foundUser.username,
                "email": foundUser.email,
                "roles": foundUser.roles,
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { 
            expiresIn: process.env.EXPIRATION_ACCESS_TOKEN ?? "15m"
        }
    );

    const refreshToken = jwt.sign(
        { "username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRATION_REFRESH_TOKEN ?? "7d"
        }
    );

    // Create secure cookie with refresh token 
    res.cookie("jwt", refreshToken, {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: "None", //cross-site cookie // allowing cross-site cookie because rest api and frontend hosted on different servers
        maxAge: process.env.EXPIRATION_REFRESH_TOKEN_COOKIE ?? 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match refreshToken // 1000 ms times etc.
    });

    // Send accessToken containing username and roles 
    res.status(200).json({ accessToken });
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
                        "email": foundUser.email,
                        "roles": foundUser.roles,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { 
                    expiresIn: process.env.EXPIRATION_ACCESS_TOKEN ?? "15m" 
                }
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

// @desc Sending Verification Email
// @route POST /auth/sendverify
// @access Public
const sendverify = async (req, res) => {
    const { email } = req.body;

    // confirm received data
    if (!email) {
        return res.status(400).json({ message: "Email field is required" });
    }

    // check if email is valid
    if (!EmailValidator.validate(email)) {
        return res.status(400).json({ message: "Invalid email address received" });
    }

    // get user associated with email from database
    const user = await User.findOne({ email }).lean().exec();

    // if no user was found in database
    if (!user) {
        return res.status(400).json({ message: "No account linked to this email was found" });
    }

    // if user is already verified
    if (user.validated) {
        return res.status(200).json({ message: "Email is already verified" });
    }

    emailVerificationSender(email);

    res.status(200).json({ message: "Verification Email send"});
};

// @desc Verify Email
// @route POST /auth/verify
// @access Public
const verify = (req, res) => {
    const { verificationToken } = req.body;
    
    if (!verificationToken) {
        res.status(400).json({ message: "Missing Verification Token in request" });
    }  

    jwt.verify(
        verificationToken,
        process.env.EMAIL_VERIFICATION_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Email verification failed, possibly the link is invalid or expired" });
            }

            const user = await User.findOne({ email: decoded.email }).exec();

            user.validated = true;

            const updateUser = await user.save();

            if (updateUser) {
                return res.status(200).json({ message: "Email successfully verified" });
            } else {
                return res.status(400).json({ message: "Email verification failed, try again at a later date or contact support" });
            }
        }
    );
};

// @desc Reset User Password
// @route POST /auth/sendreset
// @access Public
const sendreset = async (req, res, next) => {
    const { user } = req.body;

    if (!user) {
        return res.status(400).json({ message: "Providing a Username or Email is required" });
    }

    const foundUsername = await User.findOne({ username: user }).exec();
    const foundEmail = await User.findOne({ email: user }).exec();
    const foundUser = foundUsername ?? foundEmail;

    if (!foundUser) {
        return res.status(401).json({ message: "No User with this username or email found" });
    }

    if (!foundUser.validated) {
        return res.status(401).json({ message: "Account is not verified. Please verify your email first.", action: "redirectVerify" });
    }

    if (foundUser.roles.includes("Demoadmin") || foundUser.roles.includes("Admin")) {
        return res.status(401).json({ message: "Unauthorized - Contact the Headadmin for a password reset" });
    }

    const resetPasswordToken = jwt.sign(
        {
            "UserInfo": {
                "userId": foundUser._id,
            }
        },
        process.env.RESET_PASSWORD_TOKEN_SECRET,
        { 
            expiresIn: process.env.EXPIRATION_RESET_TOKEN
        }
    );

    const tokens = await Tokens.findOne({ user: foundUser._id }).exec();

    if (!tokens) {
        const createdTokens = await Tokens.create({ user: foundUser._id, resetPasswordToken });
        if (createdTokens) {
            req.resetPasswordToken = resetPasswordToken;
            req.email = foundUser.email;
            next();
        } else {
            return res.status(400).json({ message: "Server Error - Please try again at a later."});
        }
    } else {
        tokens.resetPasswordToken = resetPasswordToken;
        const updatedTokens = await tokens.save();
        if (updatedTokens) {
            req.resetPasswordToken = resetPasswordToken;
            req.email = foundUser.email;
            next();
        } else {
            return res.status(400).json({ message: "Server Error - Please try again at a later."});
        }
    }
};

const sendresetemail = (req, res) => {
    const { resetPasswordToken, email } = req;
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.BUSINESS_EMAIL_ADDRESS,
            pass: process.env.BUSINESS_EMAIL_PASSWORD,
        }
    });

    const url = process.env.NODE_ENV === "development" ? "http://localhost:5173" : process.env.FRONTEND_URL;

    const mailOptions = {
        from: `ELDENPLANNER <${process.env.BUSINESS_EMAIL_ADDRESS}>`,
        to: email,
        subject: "Eldenplanner Password Reset",
        text: `You have requested a password reset.
        Please follow the given link to reset your password.

        ${url}/reset/${resetPasswordToken} 

        If you didnt request a reset feel free to contact our support here:
        INSERT HERE`,
        html: `<p>You have requested a password reset.
        Please follow the given link to reset your password.</p>

        <a href="${url}/reset/${resetPasswordToken} " target="_blank">Reset Password</a>

        <p>If you didnt request a reset feel free to contact our support here:</p>
        <a href="INSERT HERE" target="_blank">Contact Support</a>`,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            logEvents(`VerificationEmailSender Error for: ${email}`, "ResetPasswordMailErrorLog.log");
            return res.status(400).json({ message: "Failed to send email - please contact support", action: "redirectSupport" });
        } else {
            return res.status(200).json({ message: "An email with instructions how to reset your password was send."});
        }
    });
};

const reset = (req, res) => {
    const { resetPasswordToken, password, confirm } = req.body;

    if (!resetPasswordToken) {
        return res.status(400).json({ message: "The Token was not send" });
    }

    if (!password || !confirm) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirm) {
        return res.status(400).json({ message: "New Password and Confirm dont match." });
    }

    jwt.verify(
        resetPasswordToken,
        process.env.RESET_PASSWORD_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.status(401).json({ message: "Password reset failed, your token is invalid or expired" });

            const { userId } = decoded.UserInfo;

            const tokens = await Tokens.findOne({ user: userId }).exec();
            const user = await User.findById(userId);
            const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

            if (!tokens) {
                return res.status(401).json({ message: "Password reset failed, your token was already used", action: "redirectReset" });
            } else if (tokens.resetPasswordToken !== resetPasswordToken) {
                return res.status(401).json({ message: "Password reset failed, your token is outdated", action: "redirectReset" });
            } else if (!user) {
                return res.status(400).json({ message: "Password reset failed. Failed to find user in database" });
            } else {
                user.password = hashedPwd;

                const updatedUser = await user.save();
                await tokens.deleteOne();

                if (!updatedUser) {
                    return res.status(400).json({ message: "Password reset failed. Failed to updated user in database" });
                } else {
                    return res.status(200).json({ message: "Password reset was successful", action: "redirectLogin"  });
                }
            }
        }
    );
};

export {
    login,
    refresh,
    logout,
    sendverify,
    verify,
    sendreset,
    sendresetemail,
    reset
};