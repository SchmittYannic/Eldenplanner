import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { logEvents } from "./logger.js";

const emailVerificationSender = (email) => {
    // https://miracleio.me/snippets/use-gmail-with-nodemailer#configuring-your-google-account
    // https://www.geeksforgeeks.org/email-verification/

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.BUSINESS_EMAIL_ADDRESS,
            pass: process.env.BUSINESS_EMAIL_PASSWORD,
        }
    });

    const verificationToken = jwt.sign(
        {
            email: email,
        },
        process.env.EMAIL_VERIFICATION_TOKEN_SECRET,
        {
            expiresIn: process.env.EXPIRATION_VERIFICATION_TOKEN + "s"
        },
    );

    const url = process.env.NODE_ENV === "development" ? "http://localhost:5173" : process.env.FRONTEND_URL;

    const mailOptions = {
        from: `ELDENPLANNER <${process.env.BUSINESS_EMAIL_ADDRESS}>`,
        to: email,
        subject: "Eldenplanner Email Verification",
        text: `You have recently visited 
        our website and entered your email.
        Please follow the given link to verify your email
        ${url}/verify/${verificationToken} 
        Thanks`,
        html: `<p>You have recently visited 
        our website and entered your email.
        Please follow the given link to verify your email
        <a href="${url}/verify/${verificationToken}" target="_blank">Verify Email Here</a>
        Thanks</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            logEvents(`VerificationEmailSender Error for: ${email}`, "VerificationMailErrorLog.log");
        } else {
            // console.log('Email sent: ' + info.response);
            // maybe save into database in future
        }
    });
};

export default emailVerificationSender;