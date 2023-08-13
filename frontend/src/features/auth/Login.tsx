import { ChangeEvent, KeyboardEvent, MouseEvent, ReactElement, useState } from "react";

const Login = (): ReactElement => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const onUserChange = (e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onSubmitClicked = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    const responseMsgClass = "";

    return (
        <main>
            <h1>Login</h1>
            <form
                className="form--login"
                method="post"
            >
                <label htmlFor="signup-user">
                    Username or Email
                </label>
                <input
                    id="signup-user"
                    type="text"
                    value={user}
                    onChange={onUserChange}
                    autoComplete="off"
                />

                <label htmlFor="signup-password">
                    Password
                </label>
                <input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    autoComplete="off"
                />

                <p className={`msg--login ${responseMsgClass}`}>
                    {responseMsg}
                </p>

                <button
                    className="btn"
                    type="submit"
                    onClick={onSubmitClicked}
                >
                    Login
                </button>
            </form>
        </main>
    )
};

export default Login;