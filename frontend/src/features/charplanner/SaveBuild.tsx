import { ChangeEvent, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { useAddNewBuildMutation } from "./charplannerApiSlice";
import { selectCharplannerData } from "./charplannerSlice";
import { Alert } from "../../components/ui";
import useAuth from "../../hooks/useAuth";

type PropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

const SaveBuild = ({ setTrigger }: PropsType): ReactElement => {

    const { userId } = useAuth();
    const charplannerData = useSelector(selectCharplannerData);

    const [addNewBuild, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewBuildMutation();

    const [textareaInput, setTextareaInput] = useState("");

    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaInput(e.target.value);
    };

    const onSaveBuildClicked = async () => {
        await addNewBuild({ userId, title: textareaInput, data: charplannerData })
    };

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
                    onClick={onSaveBuildClicked}
                >
                    Save
                </button>
                {isLoading &&  <p>is Loading...</p>}
            </div>
        </Alert>
    )
}

export default SaveBuild