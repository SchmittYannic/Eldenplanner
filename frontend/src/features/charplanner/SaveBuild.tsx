import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddNewBuildMutation, useUpdateBuildMutation } from "./charplannerApiSlice";
import { selectCharplannerData } from "./charplannerSlice";
import { Alert } from "../../components/ui";
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
        error: saveerror
    }] = useAddNewBuildMutation();

    const [updateBuild, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateerror
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

    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaInput(e.target.value);
    };

    const onSaveBuildClicked = async () => {
        await addNewBuild({ userId, title: textareaInput, data: charplannerData })
    };

    const onUpdateBuildClicked = async () => {
        await updateBuild({ buildId: param.buildId, userId, title: textareaInput, data: charplannerData })
    };

    useEffect(() => {
        if(isSaveSuccess || isUpdateSuccess) {
            setTextareaInput("");
            setTrigger(false);
        }
    }, [isSaveSuccess, isUpdateSuccess]);

    return (
        <Alert classes="alert--savebuild" setAlert={setTrigger}>
            <div className="alert--content">
                <label htmlFor="buildtitle">
                    Build Title:
                </label>
                <textarea
                    name="buildtitle"
                    id="buildtitle"
                    cols={30}
                    rows={5}
                    maxLength={50}
                    value={textareaInput}
                    onChange={onTextareaChange}
                />
                <button
                    className="btn"
                    type="button"
                    onClick={isBuildAuthor ? onUpdateBuildClicked : onSaveBuildClicked}
                >
                    {isBuildAuthor ? "Update" : "Save"}
                </button>
                {(isSaveLoading || isUpdateLoading) &&  <p>is Loading...</p>}
            </div>
        </Alert>
    )
}

export default SaveBuild