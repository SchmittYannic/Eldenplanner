import { ReactElement, ChangeEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MdEdit } from "react-icons/md";
import { Dialog, DialogMain, DialogIcon, DialogContent, DialogButtons } from "../../components/ui";
import useAuth from "../../hooks/useAuth";
import { useUpdateUserMutation } from "./usersApiSlice";


const EditUser = (): ReactElement => {

    const navigate = useNavigate();
    const params = useParams();
    const { username, email } = useAuth();

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
    }] = useUpdateUserMutation();

    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState(email);
    const [newPassword, setNewPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onNewUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value);
    const onNewEmailChange = (e: ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value);
    const onNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
    const onShowHideClicked = () => setIsPasswordVisible(!isPasswordVisible);

    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = (boolean: boolean) => {
        if (!boolean && params.userId) {
            navigate(`/user/${params.userId}`);
        }
    };

    const onSaveClicked = async () => {
        try {
            const { message } = await updateUser({ newUsername, newEmail, newPassword }).unwrap();
            setResponseMsg(message);
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

    useEffect(() => {
        if (isSuccess) {
            closeDialog(false);
        }
    }, [isSuccess])

    return (
        <Dialog className="dialog__edituser" setDialog={(boolean: boolean) => closeDialog(boolean)}>
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

                    <div className="input-wrapper">
                        <label htmlFor="edit-username">
                            Username:
                        </label>
                        <div className="divider-1" />
                        <input
                            id="edit-username"
                            type="text"
                            value={newUsername}
                            onChange={onNewUsernameChange}
                            maxLength={20}
                            autoComplete="off"
                        />                      
                    </div>

                    <div className="divider-4" />

                    <div className="input-wrapper">
                        <label htmlFor="edit-email">
                            Email:
                        </label>
                        <div className="divider-1" />
                        <input
                            id="edit-email"
                            type="email"
                            value={newEmail}
                            onChange={onNewEmailChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="divider-4" />

                    <div className="input-wrapper">
                        <label htmlFor="edit-password">
                            Password:
                        </label>
                        <div className="divider-1" />
                        <div className="flex">
                            <input
                                id="edit-password"
                                className="input-password"
                                type={isPasswordVisible ? "text" : "password"}
                                value={newPassword}
                                onChange={onNewPasswordChange}
                                autoComplete="off"
                            />
                            <button
                                className="password-toggle button"
                                type="button"
                                onClick={onShowHideClicked}
                            >
                                {isPasswordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

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

                <button
                    className="action-btn"
                    type="submit"
                    onClick={onSaveClicked}
                    title={"Edit Account"}
                >
                    <p className={isLoading ? "hidden" : "visible"}>Save</p>
                    {(isLoading && 
                        <div className="cliploader-centered">
                            <ClipLoader
                                color={"rgb(231, 214, 182)"}
                                loading={isLoading}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    )}
                </button>
            </DialogButtons>
        </Dialog>
    )
}

export default EditUser