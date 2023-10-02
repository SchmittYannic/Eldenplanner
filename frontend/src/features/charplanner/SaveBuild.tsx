import { ReactElement, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { MdSave } from "react-icons/md";

import { RootState } from "../../app/store";
import { useAddNewBuildMutation, useUpdateBuildMutation } from "./charplannerApiSlice";
import { BuildType, selectBuildById } from "../builds/buildsApiSlice";
import { selectCharplannerData } from "./charplannerSlice";
import { addToast } from "../../components/toastSlice";
import useAuth from "../../hooks/useAuth";
import { Dialog, DialogButtons, DialogContent, DialogIcon, DialogMain } from "../../components/ui";

type PropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const SaveBuild = ({ setTrigger }: PropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const charplannerData = useSelector(selectCharplannerData);
    const param = useParams();
    const { userId } = useAuth();

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
                const { message } = await updateBuild({
                    buildId: param.buildId,
                    userId,
                    title: textareaInput,
                    data: charplannerData
                }).unwrap();

                dispatch(addToast({ type: "success", text: message }));
            } else {
                const { message, action } = await addNewBuild({
                    userId,
                    title: textareaInput,
                    data: charplannerData
                }).unwrap();
                
                navigate(`/charplanner/${action}`);
                dispatch(addToast({ type: "success", text: message }));
            }
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

                    <div className="divider-4" />

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