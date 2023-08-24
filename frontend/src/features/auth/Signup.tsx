import { ChangeEvent, ReactElement, MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import { useAddNewUserMutation } from "../users/usersApiSlice";
import { isCustomError } from "../../app/api/apiSlice";
import { signupimg, signupimg1680w, signupimg420w, signupimg980w } from "../../assets";

const Signup = (): ReactElement => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onSubmitClick = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await addNewUser({ username, password, email })
                .then((res) => setResponseMsg((res as {data: any}).data.message))
                .catch(() => {});
    };

    const responseMsgClass = isSuccess ? "succmsg" : isError ? "errmsg" : "";

    useEffect(() => {
        if (isError && isCustomError(error)) {
            setResponseMsg(error.data.message)
        } else if (isError) {
            setResponseMsg("an error occured")
        }
    }, [isError]);

    return (
        <main className="signuppage">
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
                                <input
                                    id="signup-username"
                                    type="text"
                                    value={username}
                                    onChange={onChangeUsername}
                                    autoComplete="off"
                                    placeholder="JohnDoe"
                                />
                            </div>
                            <div className="signuppage--input-wrapper email">
                                <label htmlFor="signup-email">
                                    Email
                                </label>
                                <input
                                    id="signup-email"
                                    type="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="signuppage--input-wrapper password">
                                <label htmlFor="signup-password">
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="divider-2" />

                            <p className={`msg--signup ${responseMsgClass}`}>
                                {responseMsg}
                            </p>

                            <div className="divider-2" />

                            <button
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClick}
                            >
                                Submit
                            </button>

                            {isLoading && <p>is Loading...</p>}
                        </form>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Signup