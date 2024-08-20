import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUpdateUserMutation } from "src/features/users/usersApiSlice";
import { setCredentials } from "src/features/auth/authSlice";
import { addToast } from "src/features/toasts/toastSlice";
import useAuth from "src/hooks/useAuth";
import {
    AsyncButton,
    Dialog,
    DialogMain,
    DialogIcon,
    DialogContent,
    DialogButtons,
    Input,
    InputPassword,
} from "src/components/ui";
import { MdEdit } from "src/components/icons";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";
import { edituserschema } from "src/validation/userschema";

type EditUserFormType = {
    newUsername: string,
    newEmail: string,
    newPassword?: string | undefined,
}

const EditUser = (): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { username, email } = useAuth();

    const [updateUser, {
        isLoading,
        isError,
    }] = useUpdateUserMutation();

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<EditUserFormType>({
        defaultValues: {
            newUsername: username,
            newEmail: email,
            newPassword: "",
        },
        resolver: yupResolver(edituserschema),
    });

    const [responseMsg, setResponseMsg] = useState("");
    const [areDetailsChanged, setAreDetailsChanged] = useState(false);

    const watchedUsername = watch("newUsername", "");
    const watchedEmail = watch("newEmail", "");
    const watchedPassword = watch("newPassword", "");

    const closeDialog = () => {
        if (params.userId) {
            navigate(`/user/${params.userId}`);
        }
    };

    const onSubmit: SubmitHandler<EditUserFormType> = async (data) => {
        const { newUsername, newEmail, newPassword } = data;
        setResponseMsg("");

        try {
            const { message, accessToken } = await updateUser({ newUsername, newEmail, newPassword }).unwrap();
            closeDialog();
            dispatch(setCredentials({ accessToken }));
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
    };

    useEffect(() => {
        const hasChanged =
            watchedUsername !== username ||
            watchedEmail !== email ||
            watchedPassword !== "";

        setAreDetailsChanged(hasChanged);
    }, [watchedUsername, watchedEmail, watchedPassword, username, email]);

    return (
        <Dialog className="dialog__edituser" callback={closeDialog}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogMain>
                    <DialogIcon>
                        <MdEdit />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Edit Account</h3>

                        <div className="divider-4" />

                        <p>
                            Change your account details below and click save to confirm.
                        </p>

                        <div className="divider-4" />

                        <Input
                            name="newUsername"
                            type="text"
                            label="Username"
                            autoComplete="off"
                            maxLength={20}
                            register={register("newUsername")}
                            error={errors.newUsername}
                        />

                        <div className="divider-4" />

                        <Input
                            name="newEmail"
                            type="email"
                            label="Email"
                            autoComplete="off"
                            maxLength={80}
                            register={register("newEmail")}
                            error={errors.newEmail}
                        />

                        <div className="divider-4" />

                        <InputPassword
                            name="newPassword"
                            className="input-password"
                            label="New Password"
                            autoComplete="off"
                            maxLength={80}
                            register={register("newPassword")}
                            error={errors.newPassword}
                        />

                        {(isError && responseMsg) ? (
                            <>
                                <div className="divider-4" />
                                <div className="sm-alert errmsg full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            </>
                        ) : (<></>)}

                        <div className="divider-4" />
                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <button
                        className="button"
                        type="button"
                        onClick={closeDialog}
                        title={"Cancel Edit"}
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        disabled={!areDetailsChanged || isLoading}
                        title="Edit Account"
                    >
                        Save
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default EditUser