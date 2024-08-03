import { ReactElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import useWindowSize from "src/hooks/useWindowSize";
import { useSendResetRequestMutation } from "src/features/auth/authApiSlice";
import { AsyncButton, Input } from "src/components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "src/assets";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type ResetType = {
    user: string,
}

const Reset = (): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sendResetRequest, {
        isLoading,
        isError,
        isSuccess,
        error
    }] = useSendResetRequestMutation();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<ResetType>();

    const [isUserVerified, setIsUserVerified] = useState(true);
    const [responseMsg, setResponseMsg] = useState("");

    const onSubmit: SubmitHandler<ResetType> = async (formdata) => {
        try {
            setResponseMsg("");
            const { message } = await sendResetRequest(formdata.user).unwrap();
            reset({
                user: "",
            });
            setResponseMsg(message);
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, formdata)) {
                setResponseMsg(err.data.message);
                setError(err.data.context.label, {
                    message: err.data.message,
                });
            } else if (isCustomError(err)) {
                setResponseMsg(err.data.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    }

    useEffect(() => {
        if (!isCustomError(error)) return
        if (error.data.action !== "redirectVerify") return

        setIsUserVerified(false);
    }, [isError, error])

    return (
        <main id="resetpage" className="splitpage1">
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
                        {(isUserVerified && !isSuccess) &&
                            <p>
                                <span>To reset your password, enter the email or username you used to create your account.</span>
                            </p>
                        }
                    </div>

                    <div className="splitpage1__form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {(isUserVerified && !isSuccess) &&
                                <>
                                    <Input
                                        name="user"
                                        type="text"
                                        label="Username or Email"
                                        autoComplete="off"
                                        placeholder="name@example.com"
                                        maxLength={80}
                                        register={register}
                                        error={errors.user}
                                    />
                                    <div className="divider-4" />
                                </>
                            }

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
                                    <div className="splitpage1__form-header">
                                        <p>
                                            <span>Send verification email - <Link to="/verify">Here</Link></span>
                                        </p>
                                    </div>

                                    <div className="divider-4" />
                                </>
                            )}

                            {(isUserVerified && !isSuccess) &&
                                <AsyncButton
                                    isLoading={isLoading}
                                    className="action-btn full"
                                    type="submit"
                                    disabled={isLoading ? true : false}
                                    title="submit reset password request"
                                >
                                    Submit
                                </AsyncButton>
                            }

                            {isSuccess &&
                                <>
                                    <div className="divider-4" />

                                    <p style={{ textAlign: "center" }}>
                                        Go back to main page - <Link to="/">Here</Link>
                                    </p>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Reset