import { object, string } from "yup";

const usernameschema = string()
    .min(4, "Username must be atleast 4 characters long")
    .max(20, "Username cannot be more than 20 characters long")
    .matches(/^\S.*\S$|^\S$/, "Username cannot contain leading or trailing spaces")
    .matches(/^[A-Za-z]/, "Username must start with a letter")
    .matches(/^[A-Za-z0-9_-]+$/, "Usernames can only consist of letters, digits, hyphens and underscores")

const emailschema = string().email("Invalid email format")
    .max(80, "Email cannot be more than 20 characters long")

const passwordschema = string()
    .max(80, "Passwort darf nicht mehr als 80 Zeichen lang sein")
    .matches(/^.{6,80}$/, "Password must be between 6 and 80 characters long")
    .matches(/.*[A-Z].*/, "Password must contain at least one capital letter")
    .matches(/.*[a-z].*/, "Password must contain at least one lowercase letter")
    .matches(/.*\d.*/, "Password must contain at least one digit")
    .matches(/.*[!@#$%^&*_\-].*/, "Password must contain at least one special character")

const signupschema = object().shape({
    username: usernameschema.required("Username is required"),
    email: emailschema.required("Email is required"),
    password: passwordschema.required("Password is required"),
});

export {
    signupschema,
}