import { rateLimit } from "express-rate-limit";
import { logEvents } from "./logger.js";

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 login requests per `window` per minute
    message:
        { message: "Too many login attempts from this IP, please try again after a 60 second pause" },
    handler: (req, res, next, options) => {
        // handles what happens once limit is achieved
        logEvents(`Too Many Requests to route /auth: ${req.method}\t${req.ip}`, 'rateLimitLog.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const signupLimiter = rateLimit({
    windowMs: 1000 * 60 * 60 * 24, // 1 day
    max: 1, // Limit each IP to 1 successful signup request per `window` per day
    message:
        { message: "You already successfully created an account" },
    handler: (req, res, next, options) => {
        // handles what happens once limit is achieved
        logEvents(`Too Many Requests to route /users: ${req.method}\t${req.ip}`, 'rateLimitLog.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    skipFailedRequests: true,
});

export {
    loginLimiter,
    signupLimiter,
}