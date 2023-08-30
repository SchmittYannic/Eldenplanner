import { ReactElement,useState } from "react";
import { Alert } from "../../components/ui";
import { UserAsAdminType } from "./usersAsAdminApiSlice";

type PropsType = {
    user: UserAsAdminType,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteUserAsAdmin = ({ user, setTrigger }: PropsType): ReactElement => {

    const [inputValue, setInputValue] = useState("");

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
                    />
                </div>
                <button
                    className="action-btn"
                    type="submit"
                    disabled={!isUsername}
                >
                    Confirm Deletion
                </button>
                {/* <button
                    className="action-btn"
                    type="button"
                    onClick={isBuildAuthor ? onUpdateBuildClicked : onSaveBuildClicked}
                >
                    {isBuildAuthor ? "Update" : "Save"}
                </button>
                {(isSaveLoading || isUpdateLoading) &&  <p>is Loading...</p>} */}
            </div>
        </Alert>
    )
}

export default DeleteUserAsAdmin