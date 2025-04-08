import { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { addToast } from "src/features/toasts/toastSlice";
import { AsyncButton, FormTextArea, Input } from "src/components/ui";
import "src/components/ContactPage.scss";

type ContactPageFormType = {
    email: string,
    subject: string,
    message: string,
}

const ContactPage = () => {

    const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactPageFormType>();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onSubmit: SubmitHandler<ContactPageFormType> = async (data) => {
        setIsLoading(true);
        setIsError(false);

        try {
            const { email, subject, message } = data;

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_name: "EldenplannerSupport",
                    from_email: email === "" ? "Anonymous" : email,
                    to_email: "eldenplanner@gmail.com",
                    subject: subject,
                    message: message
                },
                publicKey,
            );

            setIsLoading(false);
            reset({
                email: "",
                subject: "",
                message: "",
            });
            dispatch(addToast({ type: "success", text: "message send" }));
        } catch (err) {
            setIsLoading(false);
            setIsError(true);
        }
    }

    return (
        <main className="contact-page">
            <div className="max-container">
                <div className="contact-page-main">
                    <div className="contact-page-header">
                        <h1>
                            Contact Support
                        </h1>

                        <div className="divider-2" />

                        <p>
                            Have questions or need assistance? Fill out the form below and our support team will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                autoComplete="off"
                                placeholder="your.email@example.com"
                                maxLength={80}
                                register={register("email", {
                                    onBlur: (e) => setValue("email", e.target.value.trim(), { shouldValidate: true })
                                })}
                                error={errors.email}
                            />

                            <div className="divider-4" />

                            <Input
                                name="subject"
                                type="text"
                                label="Subject"
                                autoComplete="off"
                                placeholder="How can we help you?"
                                maxLength={80}
                                register={register("subject", {
                                    required: true,
                                    onBlur: (e) => setValue("subject", e.target.value.trim(), { shouldValidate: true })
                                })}
                                error={errors.subject}
                            />

                            <div className="divider-4" />

                            <FormTextArea
                                name="message"
                                label="Message"
                                maxLength={1500}
                                rows={8}
                                autoComplete="off"
                                placeholder="Please describe youre issue in detail"
                                register={register("message", { required: true })}
                                error={errors.message}
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

                            <div className="divider-4" />

                            <AsyncButton
                                isLoading={isLoading}
                                className="action-btn full"
                                type="submit"
                                disabled={isLoading ? true : false}
                                title="submit support form"
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

export default ContactPage