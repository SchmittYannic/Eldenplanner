import { ChangeEvent, ReactElement, MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useAddNewUserMutation } from "../users/usersApiSlice";
import { signupimg, signupimg1680w, signupimg420w, signupimg980w } from "../../assets";
import useWindowSize from "../../hooks/useWindowSize";

const Signup = (): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
    }] = useAddNewUserMutation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [responseMsg, setResponseMsg] = useState("");

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onShowHideClicked = () => setIsPasswordVisible(!isPasswordVisible);

    const onSubmitClick = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            setResponseMsg("");
            await addNewUser({ username, password, email }).unwrap();
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400 || err.status === 409 || err.status === 429) {
                setResponseMsg(err.data?.message);
            } else if (err.status === 409) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setResponseMsg(`New user ${username} created`);
        }
    }, [isSuccess]);

    return (
        <main className="signuppage">
            {!isMobile && (
                <div className="signuppage--img-wrapper">
                    <img
                        className="signuppage--img"
                        src={signupimg420w}
                        alt="elden ring wallpaper"
                        srcSet={
                            `${signupimg420w} 420w,
                            ${signupimg980w} 980w,
                            ${signupimg1680w} 1680w,
                            ${signupimg} 2400w,`
                        }
                        sizes="50vw"
                    />
                </div>
            )}
            <div className="signuppage--rightside">
                <div className="signuppage--wrapper">
                    <div className="signuppage--form-header">
                        <h1>Create an account</h1>
                        <p>
                            <span>Enter your details below to create your account</span>
                        </p>
                    </div>

                    <div className="signuppage--form-wrapper">
                        <form
                            className="signuppage--form"
                            method="post"
                        >
                            <div className="signuppage--input-wrapper username">
                                <label htmlFor="signup-username">
                                    Username
                                </label>
                                <div className="divider-1" />
                                <input
                                    id="signup-username"
                                    type="text"
                                    value={username}
                                    onChange={onChangeUsername}
                                    autoComplete="off"
                                    placeholder="JohnDoe"
                                />
                            </div>

                            <div className="divider-4" />

                            <div className="signuppage--input-wrapper email">
                                <label htmlFor="signup-email">
                                    Email
                                </label>
                                <div className="divider-1" />
                                <input
                                    id="signup-email"
                                    type="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="divider-4" />

                            <div className="signuppage--input-wrapper password">
                                <label htmlFor="signup-password">
                                    Password
                                </label>
                                <div className="divider-1" />
                                <div className="flex">
                                    <input
                                        id="signup-password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={onChangePassword}
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
                            </div>

                            <div className="divider-4" />

                            {isSuccess && (
                                <div className="sm-alert succmsg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            )}

                            {isError && (
                                <div className="sm-alert errmsg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            )}

                            <div className="divider-4" />

                            <button
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClick}
                                disabled={isLoading ? true : false}
                            >
                                {!isLoading ? "Submit" :
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
}

export default Signup