import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";

import { useSendLogoutMutation } from "src/features/auth/authApiSlice";
import { useDeleteUserMutation } from "src/features/users/usersApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import {
    Dialog,
    DialogMain,
    DialogIcon,
    DialogContent,
    DialogButtons,
    Input,
    AsyncButton,
} from "src/components/ui";
import { MdWarningAmber } from "src/components/icons";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type DeleteAccountFormType = {
    confirmdeletion: string,
}

const DeleteAccountDialog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [deleteUser, {
        isLoading,
        isError,
    }] = useDeleteUserMutation();

    const [sendLogout, { }] = useSendLogoutMutation();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: { errors },
    } = useForm<DeleteAccountFormType>();

    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = () => {
        // Create a copy of the current search params
        const newSearchParams = new URLSearchParams(searchParams);

        // Update the search params
        newSearchParams.delete("accountdelete");

        navigate(`?${newSearchParams.toString()}`, { replace: true });
    };

    const onSubmit: SubmitHandler<DeleteAccountFormType> = async (data) => {
        try {
            const { message } = await deleteUser({ password: "Demo#1" }).unwrap();
            reset({
                confirmdeletion: "",
            });
            sendLogout("");
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

    const isDELETE = watch("confirmdeletion", "") === "DELETE";

    return (
        <Dialog className="dialog__edituser" callback={closeDialog}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogMain>
                    <DialogIcon>
                        <MdWarningAmber />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Confirm Account Deletion</h3>

                        <div className="divider-4" />

                        <p>
                            Are you sure you want to delete this account?
                            Deleted accounts are unrecoverable and lost forever.
                        </p>

                        <div className="divider-4" />

                        <Input
                            name="confirmdeletion"
                            type="text"
                            label="To Confirm, type DELETE in the field below"
                            autoComplete="off"
                            maxLength={20}
                            register={register("confirmdeletion", { required: true })}
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

                        <div className="divider-4" />
                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <button
                        className="button"
                        type="button"
                        onClick={() => closeDialog()}
                        title="Cancel Deletion"
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn action-btn--danger"
                        type="submit"
                        disabled={!isDELETE || isLoading}
                        title={!isDELETE ? "type DELETE into the field above" : "Confirm Deletion"}
                    >
                        Delete
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default DeleteAccountDialog