import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { MdSave } from "react-icons/md";
import { useAddNewBuildMutation, useUpdateBuildMutation } from "./charplannerApiSlice";
import { selectCharplannerData } from "./charplannerSlice";
import { Dialog, DialogButtons, DialogContent, DialogIcon, DialogMain } from "../../components/ui";
import useAuth from "../../hooks/useAuth";
import { BuildType, selectBuildById } from "../builds/buildsApiSlice";
import { RootState } from "../../app/store";

type PropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const SaveBuild = ({ setTrigger }: PropsType): ReactElement => {

    const { userId } = useAuth();
    const param = useParams();
    const charplannerData = useSelector(selectCharplannerData);

    const [addNewBuild, {
        isLoading: isSaveLoading,
        isSuccess: isSaveSuccess,
        isError: isSaveError,
    }] = useAddNewBuildMutation();

    const [updateBuild, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
    }] = useUpdateBuildMutation();

    const build = useSelector((state: RootState) => {
        if (param?.buildId) {
            return selectBuildById(state, param.buildId) as BuildType
        }
        return null
    });
    const isBuildAuthor = userId === build?.user;
    const initialStateTextarea = isBuildAuthor ? build?.title : "";
    const [textareaInput, setTextareaInput] = useState(initialStateTextarea);
    const [responseMsg, setResponseMsg] = useState("");

    const buttonText = isBuildAuthor ? "Update" : "Save";

    const onSaveBuildClicked = async () => {
        try {
            if (isBuildAuthor) {
                await updateBuild({
                    buildId: param.buildId,
                    userId,
                    title: textareaInput,
                    data: charplannerData
                }).unwrap();
            } else {
                await addNewBuild({
                    userId,
                    title: textareaInput,
                    data: charplannerData
                }).unwrap();
            }
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

    useEffect(() => {
        if(isSaveSuccess || isUpdateSuccess) {
            setTextareaInput("");
            setTrigger(false);
        }
    }, [isSaveSuccess, isUpdateSuccess]);

    return (
        <Dialog className="dialog__savebuild" setDialog={setTrigger}>
            <DialogMain>
                <DialogIcon>
                    <MdSave />
                </DialogIcon>
                <DialogContent>
                    <h3>Save Build</h3>

                    <div className="divider-4" />
    
                    <p>
                        Give your build a fitting title, so other users can find your build under the Community Builds Tab.
                    </p>         

                    <div className="divider-4" />

                    <div className="input-wrapper">
                        <label htmlFor="buildtitle">
                            Build Title:
                        </label>
                        <div className="divider-1" />
                        <input
                            name="buildtitle"
                            id="buildtitle"
                            type="text"
                            maxLength={50}
                            value={textareaInput}
                            onChange={(e) => setTextareaInput(e.target.value)}
                        />
                    </div>

                    {(isUpdateError || isSaveError) ? (
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
                    title={"Cancel " + buttonText}
                >
                    Cancel
                </button>

                <button
                    className="action-btn"
                    type="submit"
                    onClick={onSaveBuildClicked}
                    title={buttonText + " Build"}
                >
                    <p className={(isSaveLoading || isUpdateLoading) ? "hidden" : "visible"}>{buttonText}</p>
                    {((isSaveLoading || isUpdateLoading) && 
                        <div className="cliploader-centered">
                            <ClipLoader
                                color={"rgb(231, 214, 182)"}
                                loading={isBuildAuthor ? isUpdateLoading : isSaveLoading}
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

export default SaveBuild