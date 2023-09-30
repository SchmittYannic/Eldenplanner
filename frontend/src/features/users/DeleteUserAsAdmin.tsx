import { ReactElement,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MdWarningAmber } from "react-icons/md";
import { Dialog, DialogMain, DialogContent, DialogIcon, DialogButtons } from "../../components/ui";
import { UserAsAdminType, useDeleteUserAsAdminMutation } from "./usersAsAdminApiSlice";

type PropsType = {
    user: UserAsAdminType,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteUserAsAdmin = ({ user, setTrigger }: PropsType): ReactElement => {

    const [DeleteUserAsAdmin, {
        isLoading,
        isError,
    }] = useDeleteUserAsAdminMutation();

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const onConfirmDeletionClicked = async () => {
        try {
            await DeleteUserAsAdmin(user).unwrap();
            navigate("/users")
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400 || err.status === 401) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    const isUsername = inputValue === user.username;

    return (
        <Dialog className="dialog__deleteuser" setDialog={setTrigger}>
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

                    <div className="input-wrapper">
                        <label htmlFor="confirm-user-deletion">
                            To Confirm, type the Username in the field below
                        </label>
                        <div className="divider-1" />
                        <input
                            id="confirm-user-deletion"
                            name="confirm-user-deletion"
                            type="text"
                            maxLength={30}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoComplete="off"
                        />
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
                    className="action-btn"
                    type="submit"
                    onClick={onConfirmDeletionClicked}
                    disabled={!isUsername}
                    title={!isUsername ? "type the username into the field above" : "Confirm Deletion"}
                >
                    <p className={isLoading ? "hidden" : "visible"}>
                        Delete
                    </p>
                    {isLoading &&
                        <div className="cliploader-centered">
                            <ClipLoader
                                color={"rgb(231, 214, 182)"}
                                loading={isLoading}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    }
                </button>
            </DialogButtons>
        </Dialog>
    )
}

export default DeleteUserAsAdmin