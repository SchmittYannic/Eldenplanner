import { ReactElement,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Alert } from "../../components/ui";
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
        <Alert classes="alert--deleteuser" setAlert={setTrigger}>
            <div className="alert--content">
                <h4>Confirm Deletion</h4>
                <div className="input-wrapper">
                    <label htmlFor="confirmdeletion">
                        To Confirm, type the Username in the field below
                    </label>
                    <div className="divider-1" />
                    <input
                        id="confirmdeletion"
                        name="confirmdeletion"
                        type="text"
                        maxLength={30}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                {isError && (
                    <div className="sm-alert errmsg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{responseMsg}</span>
                    </div>
                )}

                <button
                    className="action-btn"
                    type="submit"
                    onClick={onConfirmDeletionClicked}
                    disabled={!isUsername}
                >
                    {!isLoading ? "Confirm Deletion" :
                        <ClipLoader
                            color={"rgb(231, 214, 182)"}
                            loading={isLoading}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    }
                </button>
            </div>
        </Alert>
    )
}

export default DeleteUserAsAdmin