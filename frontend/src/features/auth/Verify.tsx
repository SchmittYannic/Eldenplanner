import { ChangeEvent, MouseEvent, KeyboardEvent, useState } from "react";

import { useSendVerificationEmailMutation } from "./authApiSlice";
import useWindowSize from "../../hooks/useWindowSize";
import { AsyncButton, FormInput } from "../../components/ui";
import { loginimg, loginimg1680w, loginimg420w, loginimg980w } from "../../assets";

const Verify = () => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sendVerificationEmail, {
        isLoading,
        isError,
        isSuccess,
    }] = useSendVerificationEmailMutation();

    const [email, setEmail] = useState("");

    const [responseMsg, setResponseMsg] = useState("");

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const onSubmitClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { message } = await sendVerificationEmail(email).unwrap();
            setResponseMsg(message);
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    return (
        <main className="verifypage">
            {!isMobile && (
                <div className="verifypage--img-wrapper">
                    <img
                        className="verifypage--img"
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
            <div className="verifypage--rightside">
                <div className="verifypage--wrapper">
                    <div className="verifypage--form-header">
                        <h1>Verify Account</h1>
                        <p>
                            <span>Request verification email</span>
                        </p>
                    </div>

                    <div className="verifypage--form-wrapper">
                        <form
                            className="verifypage--form"
                            method="post"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <FormInput
                                id="verify-email"
                                name="verify-email"
                                type="email"
                                label="Email"
                                maxLength={320}
                                value={email}
                                onChange={onEmailChange}
                                autoComplete="off"
                                placeholder="name@example.com"
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
                                onClick={onSubmitClicked}
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