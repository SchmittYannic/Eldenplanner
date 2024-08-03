import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { MdMessage } from "react-icons/md";

import { addToast } from "src/features/toasts/toastSlice";
import {
    AsyncButton,
    Dialog,
    DialogMain,
    DialogIcon,
    DialogContent,
    DialogButtons,
    FormInput,
    FormTextArea,
} from "src/components/ui";

const ContactDialog = () => {

    const serviceId = String(process.env.EMAILJS_SERVICE_ID);
    const templateId = String(process.env.EMAILJS_TEMPLATE_ID);
    const publicKey = String(process.env.EMAILJS_PUBLIC_KEY);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [contactMsg, setContactMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onContactMsgChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContactMsg(e.target.value);

    const closeDialog = (boolean: boolean) => {
        if (!boolean) {
            navigate(`/`);
        }
    };

    const onSendClicked = async () => {
        setIsLoading(true);
        setIsError(false);

        emailjs.send(
            serviceId,
            templateId,
            {
                to_name: "EldenplannerSupport",
                from_email: email === "" ? "Anonymous" : email,
                to_email: "eldenplanner@gmail.com",
                message: contactMsg
            },
            publicKey,
        ).then(() => {
            setIsLoading(false);
            closeDialog(false);
            dispatch(addToast({ type: "success", text: "message send" }));
        }, () => {
            setIsLoading(false);
            setIsError(true);
        });
    };

    return (
        <Dialog className="dialog__contactform" setDialog={(boolean: boolean) => closeDialog(boolean)}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <DialogMain>
                    <DialogIcon>
                        <MdMessage />
                    </DialogIcon>
                    <DialogContent>

                        <h3>Contact</h3>

                        <div className="divider-4" />

                        <p>
                            Write your message below.
                            If you contact us for account related support please provide us with your contact details.
                        </p>

                        <div className="divider-4" />

                        <FormInput
                            id="contact-email"
                            name="contact-email"
                            type="text"
                            label="Email"
                            placeholder="Anonymous"
                            maxLength={320}
                            value={email}
                            onChange={onEmailChange}
                            autoComplete="off"
                        />

                        <div className="divider-4" />

                        <FormTextArea
                            id="contact-message"
                            name="contact-message"
                            label="Message"
                            maxLength={1500}
                            rows={8}
                            value={contactMsg}
                            onChange={onContactMsgChange}
                            autoComplete="off"
                        />

                        {isError ? (
                            <>
                                <div className="divider-4" />
                                <div className="sm-alert errmsg full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>
                                        An error has occured. Please try again later or contact us directly at&nbsp;
                                        <a href="mailto:eldenplanner@gmail.com" style={{ color: "white" }}>
                                            eldenplanner@gmail.com
                                        </a>
                                    </span>
                                </div>
                            </>
                        ) : (<></>)}

                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <button
                        className="button"
                        type="button"
                        onClick={() => closeDialog(false)}
                        title={"Cancel Contact"}
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        onClick={onSendClicked}
                        title="Send Message"
                    >
                        Send
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default ContactDialog