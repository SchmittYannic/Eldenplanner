import jwt from "jsonwebtoken";

const extractJWTInfo = (req, res, next) => {
    try {
        // Get the authorization header (case-insensitive)
        const authHeader = req.headers.authorization || req.headers.Authorization;

        // If no Authorization header is present or doesn't start with "Bearer ", proceed without error
        if (!authHeader?.startsWith("Bearer ")) {
            return next(); // Continue without JWT
        }

        // Extract the token from the Bearer scheme
        const token = authHeader.split(" ")[1];

        // Verify the JWT
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return next(); // If token verification fails, proceed without setting user info
            }

            // Attach JWT info to the request object if verification is successful
            req.userId = decoded.UserInfo.userId;
            req.username = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;

            next(); // Proceed to the next middleware
        });
    } catch (err) {
        next(); // Catch any other errors and continue
    }
};

export default extractJWTInfo;