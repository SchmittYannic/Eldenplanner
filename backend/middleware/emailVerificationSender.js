import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { logEvents } from "./logger.js";

const emailVerificationSender = (email) => {
    // https://miracleio.me/snippets/use-gmail-with-nodemailer#configuring-your-google-account
    // https://www.geeksforgeeks.org/email-verification/

    console.log(email)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.BUSINESS_EMAIL_ADDRESS,
            pass: process.env.BUSINESS_EMAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: `ELDENPLANNER <${process.env.BUSINESS_EMAIL_ADDRESS}>`,
        to: email,
        subject: "Eldenplanner Email Verification",
        text: `You have recently visited 
        our website and entered your email.
        Please follow the given link to verify your email
        http://localhost:3000/verify/ 
        Thanks`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            logEvents(`VerificationEmailSender Error for: ${email}`, "VerificationMailErrorLog.log");
        } else {
            console.log('Email sent: ' + info.response);
            // do something useful
        }
    });
};

export default emailVerificationSender;