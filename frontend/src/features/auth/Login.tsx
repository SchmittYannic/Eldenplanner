import { ChangeEvent, KeyboardEvent, MouseEvent, ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
            setResponseMsg("an error occured");
        }
    };

    return (
        <main className="loginpage">
            <div style={{backgroundColor: "black", height: "100%"}}>img</div>
            <div className="loginpage--rightside">
                <div className="loginpage--wrapper">
                    <div className="loginpage--form-header">
                        <h1>Log in to your account</h1>
                        <p>
                            <span>Don't have an account? </span>
                            <Link to={"/signup"}>
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <div className="loginpage--form-wrapper">
                        <form
                            className="loginpage--form"
                            method="post"
                        >
                            <div className="loginpage--input-wrapper username">
                                <label htmlFor="signup-user">
                                    Username or Email
                                </label>
                                <input
                                    id="signup-user"
                                    type="text"
                                    value={user}
                                    onChange={onUserChange}
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="loginpage--input-wrapper password">
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
                            </div>

                            <div className="divider-2" />

                            <p className="msg--login errmsg">
                                {responseMsg}
                            </p>

                            <div className="divider-2" />

                            <button
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClicked}
                            >
                                Login
                            </button>

                            {isLoading && <p>is Loading...</p>}
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
};

export default Login;