import jwt from "jsonwebtoken";

const extractJWTInfo = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;

        if (!authHeader?.startsWith("Bearer ")) {
            next();
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err) next();
                req.userId = decoded.UserInfo.userId;
                req.username = decoded.UserInfo.username;
                req.roles = decoded.UserInfo.roles;
                next();
            }
        );
    } catch (err) {
        next();
    }
};

export default extractJWTInfo