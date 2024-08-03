import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import useWindowSize from "src/hooks/useWindowSize";
import { useSendVerificationEmailMutation } from "src/features/auth/authApiSlice";
import { AsyncButton, Input } from "src/components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "src/assets";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type VerifyType = {
    email: string,
}

const Verify = () => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sendVerificationEmail, {
        isLoading,
        isError,
        isSuccess,
    }] = useSendVerificationEmailMutation();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<VerifyType>();

    const [responseMsg, setResponseMsg] = useState("");

    const onSubmit: SubmitHandler<VerifyType> = async (formdata) => {
        try {
            setResponseMsg("");
            const { message } = await sendVerificationEmail(formdata.email).unwrap();
            reset({
                email: "",
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

    return (
        <main id="verifypage" className="splitpage1">
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
                        <h1>Verify Account</h1>
                        <p>
                            <span>Request verification email</span>
                        </p>
                    </div>

                    <div className="splitpage1__form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                autoComplete="off"
                                placeholder="name@example.com"
                                maxLength={80}
                                register={register}
                                error={errors.email}
                            />
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
                                disabled={isLoading ? true : false}
                                title="submit verification email request"
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

export default Verify