import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdWarningAmber } from "react-icons/md";

import { UserAsAdminType, useDeleteUserAsAdminMutation } from "src/features/users/usersAsAdminApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import {
    AsyncButton,
    Dialog,
    DialogButtons,
    DialogContent,
    DialogIcon,
    DialogMain,
    Input,
} from "src/components/ui";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type DeleteUserAsAdminPropsType = {
    user: UserAsAdminType,
};

type DeleteUserAsAdminFormType = {
    confirmdeletion: string,
};

const DeleteUserAsAdmin = ({
    user,
}: DeleteUserAsAdminPropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [DeleteUserAsAdmin, {
        isLoading,
        isError,
    }] = useDeleteUserAsAdminMutation();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: { errors },
    } = useForm<DeleteUserAsAdminFormType>();

    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = (boolean: boolean) => {
        if (!boolean) {
            navigate(`/users`);
        }
    };

    const onSubmit: SubmitHandler<DeleteUserAsAdminFormType> = async (data) => {
        try {
            setResponseMsg("");
            const { message } = await DeleteUserAsAdmin(user).unwrap();
            reset({
                confirmdeletion: "",
            });
            navigate("/users");
            dispatch(addToast({ type: "success", text: message }));
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, data)) {
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
    };

    const isUsername = watch("confirmdeletion", "") === user.username;

    return (
        <Dialog className="dialog__deleteuser" setDialog={(boolean: boolean) => closeDialog(boolean)}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogMain>
                    <DialogIcon>
                        <MdWarningAmber />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Confirm User Deletion</h3>

                        <div className="divider-4" />

                        <p>
                            Are you sure you want to delete the user: <span style={{ fontWeight: "500", color: "white" }}>{user.username}</span> ?
                        </p>

                        <div className="divider-2" />

                        <p>
                            Deleted users and their builds are unrecoverable and lost forever.
                        </p>

                        <div className="divider-4" />

                        <Input
                            name="confirmdeletion"
                            type="text"
                            label="To Confirm, type the Username in the field below"
                            autoComplete="off"
                            maxLength={20}
                            register={register}
                            error={errors.confirmdeletion}
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
                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        disabled={!isUsername || isLoading}
                        title={!isUsername ? "type the username into the field above" : "Confirm Deletion"}
                    >
                        Delete
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default DeleteUserAsAdmin