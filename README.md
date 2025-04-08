# Eldenplanner

Eldenplanner is a Character Build Planner for the game Elden Ring. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and is divided into two main parts: the backend and the frontend.

## Backend

The backend is built with Node.js and Express.js and uses MongoDB as the database.

### Environment Variables

The backend uses a `.env` file for configuration. Here are the required environment variables:

- `NODE_ENV`: The environment in which the application is running (e.g., `development`, `production`).
- `ALLOWED_ORIGINS`: All allowed origins for CORS as a comma seperated string (e.g., `http://localhost:5173,http://localhost:5200`).
- `FRONTEND_URL`: The URL of the frontend application (e.g., `http://localhost:5173`).
- `DATABASE_URI`: The URI for connecting to the MongoDB database.
- `BCRYPT_SALT_ROUNDS`: The number of salt rounds for bcrypt hashing used to hash user passwords.
- `ACCESS_TOKEN_SECRET`: The secret key for signing access tokens.
- `REFRESH_TOKEN_SECRET`: The secret key for signing refresh tokens.
- `EMAIL_VERIFICATION_TOKEN_SECRET`: The secret key for signing email verification tokens.
- `RESET_PASSWORD_TOKEN_SECRET`: The secret key for signing reset password tokens.
- `EXPIRATION_ACCESS_TOKEN`: The expiration time for access tokens (e.g., 15m).
- `EXPIRATION_REFRESH_TOKEN`: The expiration time for refresh tokens (e.g., 7d).
- `EXPIRATION_REFRESH_TOKEN_COOKIE`: The expiration time for refresh token cookies in milliseconds (e.g., 604800000).
- `EXPIRATION_VERIFICATION_TOKEN`: The expiration time for email verification tokens in seconds (e.g., 1800).
- `EXPIRATION_RESET_TOKEN`: The expiration time for reset password tokens in seconds (e.g., 1800).
- `BUSINESS_EMAIL_ADDRESS`: The email address used to send automated emails from (f.e., for password resets). Using Gmail is recommended here.
- `BUSINESS_EMAIL_PASSWORD`: The app password for the business email address, which enables the backend to send automated emails.
- `BUILD_LIMIT_PER_ACCOUNT`: The maximum number of builds allowed per account.
- `NON_DELETABLE_USER_IDS`: All user ids that are protected from deletion as a comma seperated string (e.g., `64d128cd0b6a591f726d5abd,67214b3d82762ad0941456c4`).

### Running the Backend

Make sure to create the aforementioned `.env` file for configuration.

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

## Frontend

The frontend is built with React, TypeScript, and Vite.

### Environment Variables

The frontend uses a `.env` file for configuration. Here are the required environment variables:

- `NODE_ENV`: The environment in which the application is running (e.g., `development`, `production`).
- `VITE_API_BASEURL`: the base URL of the backend api (e.g., `http://localhost:3500`).
- `VITE_TOAST_AUTO_DELETE`: Whether to automatically delete toast notifications as boolean (e.g., `true`).
- `VITE_TOAST_AUTO_DELETE_TIME`: The time in milliseconds before a toast notification is automatically deleted (e.g., `4000`).
- `VITE_EMAILJS_SERVICE_ID`: The service ID for EmailJS.
- `VITE_EMAILJS_TEMPLATE_ID`: The template ID for EmailJS.
- `VITE_EMAILJS_PUBLIC_KEY`: The public key for EmailJS.
- `VITE_COMMENT_SECTION_FETCH_LIMIT`: The number of comments to fetch per request (e.g., `10`).
- `VITE_SUPPORTED_GAME_VERSION`: The supported game version (e.g., `1.14.1`).
- `VITE_CHARPLANNER_DATA_VERSION`: The version of the character planner data (e.g., `v1-19-0`).
- `VITE_IMPRESSUM_FIRSTNAME`: Firstname displayed in Impressum.
- `VITE_IMPRESSUM_LASTNAME`: Lastname displayed in Impressum.
- `VITE_IMPRESSUM_EMAIL`: Email displayed in Impressum.
- `VITE_IMPRESSUM_STREET`: Street displayed in Impressum.
- `VITE_IMPRESSUM_PLZ`: Postal code displayed in Impressum.
- `VITE_IMPRESSUM_CITY`: City displayed in Impressum.

### Running the Frontend

Make sure to create the aforementioned `.env` file for configuration.

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```