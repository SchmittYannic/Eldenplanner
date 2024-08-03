import Joi from "joi";

export const emailschema = Joi.string()
    .email()
    .pattern(new RegExp(/^\S.*\S$|^\S$/))
    .message("Email cannot contain leading or trailing spaces")
    .label("email")
    .messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required",
        "any.required": "Email is required"
    });

export const passwordschema = Joi.string()
    .label("password")
    .pattern(new RegExp(/^\S*$/))
    .message("Password cannot contain spaces")
    .pattern(new RegExp(/^.{6,80}$/))
    .message("Password must be between 6 and 80 characters long")
    .pattern(new RegExp(/.*[A-Z].*/))
    .message("Password must contain at least one capital letter")
    .pattern(new RegExp(/.*[a-z].*/))
    .message("Password must contain at least one lowercase letter")
    .pattern(new RegExp(/.*\d.*/))
    .message("Password must contain at least one digit")
    .pattern(new RegExp(/.*[!@#$%^&*_\-].*/))
    .message("Password must contain at least one special character")
    .messages({
        "string.empty": "Password is required",
        "any.required": "Password is required"
    });

export const usernameschema = Joi.string()
    .label("username")
    .min(4)
    .max(20)
    .pattern(new RegExp(/^\S.*\S$|^\S$/))
    .message("Username cannot contain leading or trailing spaces")
    .pattern(new RegExp(/^[A-Za-z]/))
    .message("Username must start with a letter")
    .pattern(new RegExp(/^[A-Za-z0-9_-]+$/))
    .message("Usernames can only consist of letters, digits, hyphens and underscores")
    .messages({
        "string.min": "Username must be atleast 4 characters long",
        "string.max": "Username cannot be more than 20 characters long",
        "string.trim": "Username cannot contain leading or trailing spaces",
        "string.empty": "Username is required",
        "any.required": "Username is required",
    });

export const signupschema = Joi.object().keys({
    username: usernameschema.required(),
    email: emailschema.required(),
    password: passwordschema.required(),
});