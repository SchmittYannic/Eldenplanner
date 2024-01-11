import { useNavigate } from "react-router-dom";
import { 
    AsyncButton,
    Dialog,
    DialogMain,
    DialogIcon,
    DialogContent,
    DialogButtons,
    FormInput,
    FormTextArea,
} from "./ui"
import { ChangeEvent, useState } from "react";

const ContactDialog = () => {

    const navigate = useNavigate();
    const isLoading = false;

    const [email, setEmail] = useState("");
    const [contactMsg, setContactMsg] = useState("");

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onContactMsgChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContactMsg(e.target.value);

    const closeDialog = (boolean: boolean) => {
        if (!boolean) {
            navigate(`/`);
        }
    };

    const onSendClicked = async () => {

    };

    return (
        <Dialog className="dialog__contactform" setDialog={(boolean: boolean) => closeDialog(boolean)}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <DialogMain>
                    {/* <DialogIcon>
                        Icon
                    </DialogIcon> */}
                    <DialogContent>
                        <h3>Contact</h3>

                        <div className="divider-4" />

                        <p>
                            Write your contact details and message below
                        </p>

                        <div className="divider-4" />

                        <FormInput
                            id="contact-email"
                            name="contact-email"
                            type="text"
                            label="Email"
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