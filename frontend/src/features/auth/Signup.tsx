import { ChangeEvent, ReactElement, MouseEvent, KeyboardEvent, useState, useEffect } from "react";

import { useAddNewUserMutation } from "../users/usersApiSlice";
import useWindowSize from "../../hooks/useWindowSize";
import { AsyncButton, FormInput } from "../../components/ui";
import { signupimg, signupimg1680w, signupimg420w, signupimg980w } from "../../assets";

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
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <FormInput
                                id="signup-username"
                                name="signup-username"
                                type="text"
                                maxLength={20}
                                value={username}
                                onChange={onChangeUsername}
                                autoComplete="off"
                                placeholder="JohnDoe"
                            >
                                Username
                            </FormInput>

                            <div className="divider-4" />

                            <FormInput
                                id="signup-email"
                                name="signup-email"
                                type="email"
                                maxLength={320}
                                value={email}
                                onChange={onChangeEmail}
                                autoComplete="off"
                                placeholder="name@example.com"
                            >
                                Email
                            </FormInput>

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

                            <AsyncButton
                                isLoading={isLoading}
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClick}
                                disabled={isLoading ? true : false}
                                title="submit signup form"
                            >
                                Submit
                            </AsyncButton>
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Signup