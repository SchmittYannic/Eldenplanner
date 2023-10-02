import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdWarningAmber } from "react-icons/md";

import { UserAsAdminType, useDeleteUserAsAdminMutation } from "./usersAsAdminApiSlice";
import { addToast } from "../../components/toastSlice";
import {
    AsyncButton,
    Dialog,
    DialogButtons,
    DialogContent,
    DialogIcon,
    DialogMain,
    FormInput,
} from "../../components/ui";

type DeleteUserAsAdminPropsType = {
    user: UserAsAdminType,
};

const DeleteUserAsAdmin = ({ user }: DeleteUserAsAdminPropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [DeleteUserAsAdmin, {
        isLoading,
        isError,
    }] = useDeleteUserAsAdminMutation();

    const [inputValue, setInputValue] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = (boolean: boolean) => {
        if (!boolean) {
            navigate(`/users`);
        }
    };

    const onConfirmDeletionClicked = async () => {
        try {
            const { message } = await DeleteUserAsAdmin(user).unwrap();
            navigate("/users");
            dispatch(addToast({ type: "success", text: message }));
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if ([400, 401].includes(err.status)) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    const isUsername = inputValue === user.username;

    return (
        <Dialog className="dialog__deleteuser" setDialog={(boolean: boolean) => closeDialog(boolean)}>
            <DialogMain>
                <DialogIcon>
                    <MdWarningAmber />
                </DialogIcon>
                <DialogContent>
                    <h3>Confirm User Deletion</h3>

                    <div className="divider-4" />

                    <p>
                        Are you sure you want to delete this build?
                        Deleted builds are unrecoverable and lost forever.
                    </p> 

                    <div className="divider-4" />

                    <FormInput
                        id="confirm-user-deletion"
                        name="confirm-user-deletion"
                        type="text"
                        label="To Confirm, type the Username in the field below"
                        maxLength={20}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoComplete="off"
                    />

                    {isError ? (
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
                    onClick={onConfirmDeletionClicked}
                    disabled={!isUsername}
                    title={!isUsername ? "type the username into the field above" : "Confirm Deletion"}
                >
                    Delete
                </AsyncButton>
            </DialogButtons>
        </Dialog>
    )
}

export default DeleteUserAsAdmin