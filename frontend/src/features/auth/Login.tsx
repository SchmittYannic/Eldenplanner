import { ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";

import useWindowSize from "src/hooks/useWindowSize";
import { isCustomError, isCustomFormError } from "src/utils/typeguards";
import { useLoginMutation } from "src/features/auth/authApiSlice";
import { setCredentials } from "src/features/auth/authSlice";
import { addToast } from "src/features/toasts/toastSlice";
import { AsyncButton, Input, InputPassword } from "src/components/ui";
import { isFieldName } from "src/utils/typeguards";

type LoginUserType = {
    user: string,
    password: string,
}

const Login = (): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [login, {
        isLoading,
        isError,
    }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        setValue,
        formState: { errors },
    } = useForm<LoginUserType>();

    const [responseMsg, setResponseMsg] = useState("");

    const onSubmit: SubmitHandler<LoginUserType> = async (data) => {
        try {
            setResponseMsg("");
            const { message, accessToken } = await login(data).unwrap();
            dispatch(setCredentials({ accessToken }));
            reset({
                user: "",
                password: "",
            });
            navigate("/charplanner");
            dispatch(addToast({ type: "success", text: message }));
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, data)) {
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

    return (
        <main id="loginpage" className="splitpage1">
            {!isMobile && (
                <div className="splitpage1__img-wrapper loginimg">
                </div>
            )}
            <div className="splitpage1__rightside">
                <div className="splitpage1__wrapper">
                    <div className="splitpage1__form-header">
                        <h1>Log in to your account</h1>
                        <p>
                            <span>Don't have an account? </span>
                            <Link to={"/signup"}>
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <div className="splitpage1__form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="user"
                                type="text"
                                label="Username or Email"
                                autoComplete="off"
                                placeholder="name@example.com"
                                maxLength={80}
                                register={register("user", {
                                    required: true,
                                    onBlur: (e) => setValue("user", e.target.value.trim(), { shouldValidate: true })
                                })}
                                error={errors.user}
                            />
                            <div className="divider-4" />
                            <InputPassword
                                name="password"
                                className="input-password"
                                label="Password"
                                autoComplete="off"
                                maxLength={80}
                                register={register("password", { required: true })}
                                error={errors.password}
                            >
                                <Link className="text-right text-sm" to="/reset">
                                    forgot password?
                                </Link>
                            </InputPassword>
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