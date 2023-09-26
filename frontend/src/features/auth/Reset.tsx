import { ChangeEvent, ReactElement, MouseEvent, KeyboardEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useWindowSize from "../../hooks/useWindowSize";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "../../assets";
import { useSendResetRequestMutation } from "./authApiSlice";
import { isCustomError } from "../../app/api/apiSlice";

const Reset = ():ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sendResetRequest, {
        isLoading,
        isError,
        isSuccess,
        error
    }] = useSendResetRequestMutation();

    const [user, setUser] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const onUserChange = (e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value);

    const onSubmitClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { message } = await sendResetRequest(user).unwrap();
            setResponseMsg(message);
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if ([400, 401].includes(err.status)) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    console.log(error)

    return (
        <main className="resetpage">
            {!isMobile && (
                <div className="resetpage--img-wrapper">
                    <img
                        className="resetpage--img"
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
            <div className="resetpage--rightside">
                <div className="resetpage--wrapper">
                    <div className="resetpage--form-header">
                        <h1>Reset Password</h1>
                        <p>
                            <span>To reset your password, enter the email or username you used to create your account.</span>
                        </p>
                    </div>

                    <div className="resetpage--form-wrapper">
                        <form
                            className="resetpage--form"
                            method="post"
                        >
                            <div className="resetpage--input-wrapper user">
                                <label htmlFor="reset-user">
                                    Username or Email
                                </label>
                                <div className="divider-1" />
                                <input
                                    id="reset-user"
                                    type="text"
                                    value={user}
                                    onChange={onUserChange}
                                    autoComplete="off"
                                    placeholder="name@example.com"
                                />
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

                            {isCustomError(error) && error.data.action === "redirectVerify" && (
                                <>
                                    <div className="resetpage--form-header">
                                        <p>
                                            <span>Send verification email - <Link to="/verify">Here</Link></span>
                                        </p>
                                    </div>

                                    <div className="divider-4" />
                                </>
                            )}

                            <button
                                className="action-btn full"
                                type="submit"
                                onClick={onSubmitClicked}
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

export default Reset