import express from "express";
import { login, refresh, logout, sendverify, verify } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();

router.route('/')
    .post(loginLimiter, login);

router.route('/refresh')
    .get(refresh);

router.route('/logout')
    .post(logout);

router.route('/sendverify')
    .post(sendverify);

router.route('/verify')
    .post(verify);

export default router;