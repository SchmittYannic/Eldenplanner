import { ReactElement, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdWarningAmber } from "react-icons/md";

import { useDeleteBuildMutation } from "src/features/charplanner/charplannerApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import useAuth from "src/hooks/useAuth";
import {
    AsyncButton,
    Dialog,
    DialogButtons,
    DialogContent,
    DialogIcon,
    DialogMain,
    FormInput,
} from "src/components/ui";

type PropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteBuild = ({ setTrigger }: PropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { userId } = useAuth();

    const [deleteBuild, {
        isLoading,
        isError,
    }] = useDeleteBuildMutation();

    const [inputValue, setInputValue] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const onConfirmDeletionClicked = async () => {
        try {
            const { message } = await deleteBuild(params.buildId).unwrap();
            navigate(`/user/${userId}`);
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

    const isDELETE = inputValue === "DELETE";

    return (
        <Dialog className="dialog__deletebuild" setDialog={setTrigger}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <DialogMain>
                    <DialogIcon>
                        <MdWarningAmber />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Confirm Build Deletion</h3>

                        <div className="divider-4" />

                        <p>
                            Are you sure you want to delete this build?
                            Deleted builds are unrecoverable and lost forever.
                        </p>

                        <div className="divider-4" />

                        <FormInput
                            id="confirmdeletion"
                            name="confirmdeletion"
                            type="text"
                            label="To Confirm, type DELETE in the field below"
                            maxLength={20}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
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
                        onClick={() => setTrigger(false)}
                        title="Cancel Deletion"
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        onClick={onConfirmDeletionClicked}
                        disabled={!isDELETE}
                        title={!isDELETE ? "type DELETE into the field above" : "Confirm Deletion"}
                    >
                        Delete
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default DeleteBuild