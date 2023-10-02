import { ChangeEvent, KeyboardEvent, MouseEvent, ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import { addToast } from "../../components/toastSlice";
import useWindowSize from "../../hooks/useWindowSize";
import { AsyncButton } from "../../components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "../../assets";

const Login = (): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [login, {
        isLoading,
        isError,
    }] = useLoginMutation();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [responseMsg, setResponseMsg] = useState("");

    const onUserChange = (e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onShowHideClicked = () => setIsPasswordVisible(!isPasswordVisible);

    const onSubmitClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { message, accessToken } = await login({ user, password }).unwrap();

            dispatch(setCredentials({ accessToken }));
            setUser("");
            setPassword("");
            navigate("/charplanner");
            dispatch(addToast({ type: "success", text: message }));
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if ([400, 401, 429].includes(err.status)) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    return (
        <main className="loginpage">
            {!isMobile && (
                <div className="loginpage--img-wrapper">
                    <img
                        className="loginpage--img"
                        src={loginimg420w}
                        alt="elden ring wallpaper"
                        srcSet={
                            `${loginimg420w} 420w,
                            ${loginimg980w} 980w,
                            ${loginimg1680w} 1680w,
                            ${loginimg} 2400w,`
                        }
                        sizes="50vw"
                    />
                </div>
            )}
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
                                <label htmlFor="login-user">
                                    Username or Email
                                </label>
                                <div className="divider-1" />
                                <input
                                    id="login-user"
                                    type="text"
                                    value={user}
                                    onChange={onUserChange}
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="divider-4" />

                            <div className="loginpage--input-wrapper password">
                                <label htmlFor="login-password">
                                    Password
                                </label>
                                <div className="divider-1" />
                                <div className="flex">
                                    <input
                                        id="login-password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={onPasswordChange}
                                        autoComplete="off"
                                    />
                                    <button
                                        className="password-toggle button"
                                        type="button"
                                        onClick={onShowHideClicked}
                                    >
                                        {isPasswordVisible ? "Hide" : "Show"}
                                    </button>
                                </div>

                                <Link className="text-right text-sm" to="/reset">
                                    forgot password?
                                </Link>
                            </div>

                            <div className="divider-4" />

                            {isError && (
                                <div className="sm-alert errmsg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            )}

                            <div className="divider-4" />

                            <AsyncButton
                                isLoading={isLoading}
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClicked}
                                disabled={isLoading ? true : false}
                                title="login"
                            >
                                Login
                            </AsyncButton>
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
};

export default Login;