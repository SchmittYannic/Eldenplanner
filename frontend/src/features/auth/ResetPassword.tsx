import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useWindowSize from "src/hooks/useWindowSize";
import { useResetMutation } from "src/features/auth/authApiSlice";
import { AsyncButton, InputPassword, ClipLoader } from "src/components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "src/assets";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";
import { resetpasswordschema } from "src/validation/userschema";

type ResetPasswordType = {
    password: string,
    confirm: string,
}

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

    const {
        register,
        handleSubmit,
        setError,
        reset: resetForm,
        formState: { errors },
    } = useForm<ResetPasswordType>({
        resolver: yupResolver(resetpasswordschema),
    });

    const [isToken, setIsToken] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    const onSubmit: SubmitHandler<ResetPasswordType> = async (formdata) => {
        try {
            setResponseMsg("");
            const { password, confirm } = formdata;
            resetForm({
                password: "",
                confirm: "",
            })
            const { message } = await reset({ resetPasswordToken, password, confirm }).unwrap();
            setResponseMsg(message);
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, formdata)) {
                setResponseMsg("");
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <InputPassword
                                            name="password"
                                            className="input-password"
                                            label="New Password"
                                            autoComplete="off"
                                            maxLength={80}
                                            register={register("password")}
                                            error={errors.password}
                                        />
                                        <div className="divider-4" />
                                        <InputPassword
                                            name="confirm"
                                            className="input-password"
                                            label="Confirm"
                                            autoComplete="off"
                                            maxLength={80}
                                            register={register("confirm")}
                                            error={errors.confirm}
                                        />
                                        <div className="divider-4" />

                                        {(isError && responseMsg) && (
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
                                            disabled={isLoading ? true : false}
                                            title="submit reset password form"
                                        >
                                            Submit
                                        </AsyncButton>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default ResetPassword