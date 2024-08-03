import { ReactElement, ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import jwtDecode from "jwt-decode";

import { isCustomError } from "src/utils/typeguards";
import { useResetMutation } from "./authApiSlice";
import useWindowSize from "../../hooks/useWindowSize";
import { AsyncButton, FormInput } from "../../components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "../../assets";

const ResetPassword = (): ReactElement => {

    const { resetPasswordToken } = useParams();
    const navigate = useNavigate();

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [reset, {
        isLoading,
        isError,
        isSuccess,
        error
    }] = useResetMutation();

    const [isToken, setIsToken] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onConfirmChange = (e: ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value);

    const onSubmitClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { message } = await reset({ resetPasswordToken, password, confirm }).unwrap();
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

    useEffect(() => {
        if (resetPasswordToken) {
            try {
                jwtDecode(resetPasswordToken);
                setIsToken(true);
            } catch (err: any) {
                navigate("/reset");
            }
        } else {
            navigate("/reset");
        }
    }, []);

    return (
        <>
            {!isToken &&
                <main>
                    <ClipLoader
                        color={"rgb(231, 214, 182)"}
                        loading={!isToken}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </main>
            }

            {isToken &&
                <main id="resetpasswordpage" className="splitpage1">
                    {!isMobile && (
                        <div className="splitpage1__img-wrapper">
                            <img
                                className="splitpage1__img"
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
                    <div className="splitpage1__rightside">
                        <div className="splitpage1__wrapper">
                            <div className="splitpage1__form-header">
                                <h1>Reset Password</h1>
                                {!isSuccess && !(isCustomError(error) && error.data.action === "redirectReset") &&
                                    <p>
                                        <span>Type in your new password below</span>
                                    </p>
                                }
                            </div>

                            {(isCustomError(error) && error.data.action === "redirectReset") ? (
                                <>
                                    <div className="divider-4" />

                                    <div className="sm-alert errmsg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{responseMsg}</span>
                                    </div>

                                    <div className="divider-4" />

                                    <div className="splitpage1__form-header">
                                        <p>
                                            <span>Send a new token by email - <Link to="/reset">Here</Link></span>
                                        </p>
                                    </div>
                                </>
                            ) : isSuccess ? (
                                <>
                                    <div className="divider-4" />

                                    <div className="sm-alert succmsg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{responseMsg}</span>
                                    </div>

                                    <div className="divider-4" />

                                    <div className="splitpage1__form-header">
                                        <p>
                                            <span>Proceed to <Link to="/login">login</Link></span>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="splitpage1__form-wrapper">
                                    <form
                                        className="splitpage1__form"
                                        method="post"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <FormInput
                                            id="reset-password"
                                            name="reset-password"
                                            className="input-password"
                                            type="password"
                                            label="New Password"
                                            value={password}
                                            onChange={onPasswordChange}
                                            autoComplete="off"
                                        />

                                        <div className="divider-4" />

                                        <FormInput
                                            id="reset-confirm"
                                            name="reset-confirm"
                                            className="input-password"
                                            type="password"
                                            label="Confirm"
                                            value={confirm}
                                            onChange={onConfirmChange}
                                            autoComplete="off"
                                        />

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
                                            title="submit reset password form"
                                        >
                                            Submit
                                        </AsyncButton>

                                    </form>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default ResetPassword