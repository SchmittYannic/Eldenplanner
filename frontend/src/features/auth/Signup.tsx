import { ChangeEvent, ReactElement, MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import { useAddNewUserMutation } from "../users/usersApiSlice";
import { isCustomError } from "../../app/api/apiSlice";

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
        <main>
            <form
                className="form--signup"
                method="post"
            >
                <label htmlFor="signup-username">
                    Username
                </label>
                <input
                    id="signup-username"
                    type="text"
                    value={username}
                    onChange={onChangeUsername}
                    autoComplete="off"
                />

                <label htmlFor="signup-email">
                    Email
                </label>
                <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    autoComplete="off"
                />

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

                <p className={`msg--signup ${responseMsgClass}`}>
                    {responseMsg}
                </p>

                <button
                    className="btn"
                    type="submit"
                    onClick={onSubmitClick}
                >
                    Submit
                </button>

                {isLoading && <p>is Loading...</p>}
            </form>
        </main>
    )
}

export default Signup