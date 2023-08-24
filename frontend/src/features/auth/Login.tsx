import { ChangeEvent, KeyboardEvent, MouseEvent, ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import { loginimg } from "../../assets";

const Login = (): ReactElement => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading, isError }] = useLoginMutation();

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
                setResponseMsg(err.data?.message ? err.data?.message : "an error occured");
            }
        }
    };

    return (
        <main className="loginpage">
            <div className="loginpage--img-wrapper">
                <img
                    className="loginpage--img"
                    src={loginimg}
                    alt="elden ring wallpaper"
                />
            </div>
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

                            <div className="divider-4" />

                            {isError && (
                                <div className="errmsg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            )}

                            <div className="divider-4" />

                            <button
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClicked}
                                disabled={isLoading ? true : false}
                            >
                                {!isLoading ? "Login" :
                                    <ClipLoader
                                        color={"rgb(231, 214, 182)"}
                                        loading={isLoading}
                                        size={20}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                }
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
};

export default Login;