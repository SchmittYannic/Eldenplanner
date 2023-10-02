import { ReactElement, ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";

import { useUpdateUserMutation } from "./usersApiSlice";
import { setCredentials } from "../auth/authSlice";
import { addToast } from "../../components/toastSlice";
import useAuth from "../../hooks/useAuth";
import {
    AsyncButton,
    Dialog,
    DialogMain,
    DialogIcon,
    DialogContent,
    DialogButtons,
    FormInput,
} from "../../components/ui";

const EditUser = (): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { username, email } = useAuth();

    const [updateUser, {
        isLoading,
        isError,
    }] = useUpdateUserMutation();

    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState(email);
    const [newPassword, setNewPassword] = useState("");

    const onNewUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value);
    const onNewEmailChange = (e: ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value);
    const onNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);

    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = (boolean: boolean) => {
        if (!boolean && params.userId) {
            navigate(`/user/${params.userId}`);
        }
    };

    const onSaveClicked = async () => {
        try {
            const { message, accessToken } = await updateUser({ newUsername, newEmail, newPassword }).unwrap();
            closeDialog(false);
            dispatch(setCredentials({ accessToken }));
            dispatch(addToast({ type: "success", text: message }));
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if ([400, 409].includes(err.status)) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    return (
        <Dialog className="dialog__edituser" setDialog={(boolean: boolean) => closeDialog(boolean)}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
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

                        <FormInput
                            id="edit-username"
                            name="edit-username"
                            type="text"
                            label="Username"
                            maxLength={20}
                            value={newUsername}
                            onChange={onNewUsernameChange}
                            autoComplete="off"
                        />

                        <div className="divider-4" />

                        <FormInput
                            id="edit-email"
                            name="edit-email"
                            type="email"
                            label="Email"
                            maxLength={320}
                            value={newEmail}
                            onChange={onNewEmailChange}
                            autoComplete="off"
                        />

                        <div className="divider-4" />

                        <FormInput
                            id="edit-password"
                            name="edit-password"
                            className="input-password"
                            type="password"
                            label="Password"
                            value={newPassword}
                            onChange={onNewPasswordChange}
                            autoComplete="off"
                        />

                        <div className="divider-4" />

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
                    <button
                        className="button"
                        type="button"
                        onClick={() => closeDialog(false)}
                        title={"Cancel Edit"}
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        onClick={onSaveClicked}
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