import { object, string, ref } from "yup";

const usernameschema = string()
    .max(20, "Username cannot be more than 20 characters long")
    .matches(/^(.{4,20})?$/, "Username must be between 4 and 20 characters long")
    .matches(/^$|^\S.*\S$|^\S$/, "Username cannot contain leading or trailing spaces")
    .matches(/^$|^[A-Za-z]/, "Username must start with a letter")
    .matches(/^$|^[A-Za-z0-9_-]+$/, "Usernames can only consist of letters, digits, hyphens and underscores")

const emailschema = string().email("Invalid email format")
    .max(80, "Email cannot be more than 80 characters long")

//regex in passwordschema allow empty strings, so it is usable for edituserschema aswell
const passwordschema = string()
    .max(80, "Password cannot be more than 80 characters long")
    .matches(/^(.{6,80})?$/, "Password must be between 6 and 80 characters long")
    .matches(/^(.*[A-Z].*|)$/, "Password must contain at least one capital letter")
    .matches(/^(.*[a-z].*|)$/, "Password must contain at least one lowercase letter")
    .matches(/^(.*\d.*|)$/, "Password must contain at least one digit")
    .matches(/^(.*[!@#$%^&*_\-].*|)$/, "Password must contain at least one special character")

const passwordrepeatschema = string()
    .max(80, "Password cannot be more than 80 characters long")
    .oneOf([ref("password")], "Field must match password")

const signupschema = object().shape({
    username: usernameschema.required("Username is required"),
    email: emailschema.required("Email is required"),
    password: passwordschema.required("Password is required"),
});

const edituserschema = object().shape({
    newUsername: usernameschema.required("Username is required"),
    newEmail: emailschema.required("Email is required"),
    newPassword: passwordschema,
});

const resetpasswordschema = object().shape({
    password: passwordschema.required(),
    confirm: passwordrepeatschema.required(),
});

const verifyschema = object().shape({
    email: emailschema.required(),
});

export {
    signupschema,
    resetpasswordschema,
    verifyschema,
    edituserschema,
}