import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useWindowSize from "src/hooks/useWindowSize";
import { setCredentials } from "src/features/auth/authSlice";
import { useAddNewUserMutation } from "src/features/users/usersApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import { AsyncButton, Input, InputPassword } from "src/components/ui";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";
import { signupschema } from "src/validation/userschema";

type SignupUserType = {
    username: string,
    email: string,
    password: string,
}

const Signup = (): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [addNewUser, {
        isLoading,
        isError,
    }] = useAddNewUserMutation();

    const [responseMsg, setResponseMsg] = useState("");

    const {
        register,
        handleSubmit,
        setError,
        reset,
        setValue,
        formState: { errors },
    } = useForm<SignupUserType>({
        resolver: yupResolver(signupschema),
    });

    const onSubmit: SubmitHandler<SignupUserType> = async (data) => {
        try {
            setResponseMsg("");
            const { message, accessToken } = await addNewUser(data).unwrap();
            dispatch(setCredentials({ accessToken }));
            reset({
                username: "",
                email: "",
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
        <main id="signuppage" className="splitpage1">
            {!isMobile && (
                <div className="splitpage1__img-wrapper signupimg">
                </div>
            )}
            <div className="splitpage1__rightside">
                <div className="splitpage1__wrapper">
                    <div className="splitpage1__form-header">
                        <h1>Create an account</h1>
                        <p>
                            <span>Enter your details below to create your account</span>
                        </p>
                    </div>

                    <div className="splitpage1__form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="username"
                                type="text"
                                label="Username"
                                autoComplete="off"
                                placeholder="JohnDoe"
                                maxLength={20}
                                register={register("username", {
                                    onBlur: (e) => setValue("username", e.target.value.trim(), { shouldValidate: true })
                                })}
                                error={errors.username}
                            />
                            <div className="divider-4" />
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                autoComplete="off"
                                placeholder="name@example.com"
                                maxLength={80}
                                register={register("email", {
                                    onBlur: (e) => setValue("email", e.target.value.trim(), { shouldValidate: true })
                                })}
                                error={errors.email}
                            />
                            <div className="divider-4" />
                            <InputPassword
                                name="password"
                                className="input-password"
                                label="Password"
                                autoComplete="off"
                                maxLength={80}
                                register={register("password")}
                                error={errors.password}
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