import { ChangeEvent, KeyboardEvent, MouseEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";

const Login = (): ReactElement => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const onUserChange = (e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onSubmitClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { accessToken } = await login({ user, password }).unwrap();

            dispatch(setCredentials({ accessToken }));
            setUser("");
            setPassword("");
            navigate("/charplanner");
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400) {
                setResponseMsg(err.data?.message);
            } else if (err.status === 401) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg(err.data?.message);
            }
        }
    };

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

                <p className="msg--login errmsg">
                    {responseMsg}
                </p>

                <button
                    className="btn"
                    type="submit"
                    onClick={onSubmitClicked}
                >
                    Login
                </button>

                {isLoading && <p>is Loading...</p>}
            </form>
        </main>
    )
};

export default Login;