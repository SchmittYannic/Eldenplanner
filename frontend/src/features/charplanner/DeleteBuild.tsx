import { ReactElement, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Dialog, DialogButtons, DialogContent } from "../../components/ui";
import { useDeleteBuildMutation } from "./charplannerApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

type PropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteBuild = ({ setTrigger }: PropsType): ReactElement => {

    const params = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [deleteBuild, {
        isLoading,
        isError,
    }] = useDeleteBuildMutation();

    const [inputValue, setInputValue] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const onConfirmDeletionClicked = async () => {
        try {
            await deleteBuild(params.buildId).unwrap();
            navigate(`/user/${userId}`);
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

    const isDELETE = inputValue === "DELETE";

    return (
        <Dialog className="dialog__deletebuild" setAlert={setTrigger}>
            <DialogContent dialogtype="warning">
                <h3>Confirm Build Deletion</h3>

                <div className="divider-4" />
   
                <p>
                    Are you sure you want to delete this build?
                    Deleted builds are unrecoverable and lost forever.
                </p> 

                <div className="divider-4" />

                <div className="input-wrapper">
                    <label htmlFor="confirmdeletion">
                        To Confirm, type DELETE in the field below
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
            <DialogButtons>
                <button
                    className="button"
                    type="button"
                    onClick={() => setTrigger(false)}
                    title="Cancel Deletion"
                >
                    Cancel
                </button>

                <button
                    className="action-btn"
                    type="submit"
                    onClick={onConfirmDeletionClicked}
                    disabled={!isDELETE}
                    title={!isDELETE ? "type DELETE into the field above" : "Confirm Deletion"}
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

export default DeleteBuild