import { ReactElement, useState } from "react";
import SaveBuild from "./SaveBuild";
import useAuth from "../../hooks/useAuth";
import DeleteBuild from "./DeleteBuild";

type PropsType = {
    isBuildAuthor: boolean
};

const ActionsSection = ({ isBuildAuthor }: PropsType): ReactElement => {

    const { status } = useAuth();

    const [isDeleteTriggered, setIsDeleteTriggered] = useState(false);
    const [isSaveTriggered, setIsSaveTriggered] = useState(false);

    const onSaveClicked = () => {
        if (status !== "Visitor") {
            setIsSaveTriggered(true);
        }
    };

    const onDeleteClick = () => setIsDeleteTriggered(true);

    return (
        <section className="charplanner__actionscontainer">
            {isBuildAuthor && (
                <button
                    className="charplanner__delete button"
                    type="button"
                    onClick={onDeleteClick}
                    title="Delete Build"
                >
                    Delete
                </button>
            )}
            {isDeleteTriggered && 
                <DeleteBuild setTrigger={setIsDeleteTriggered} />
            }

            <button
                className="Charplanner__Save action-btn"
                type="button"
                onClick={onSaveClicked}
                title={status === "Visitor" ? "Requires Login" : isBuildAuthor ? "Update Build" : "Save Build"}
                disabled={status === "Visitor"}
            >
                {isBuildAuthor ? "Update" : "Save"}
            </button>          
            {isSaveTriggered && 
                <SaveBuild setTrigger={setIsSaveTriggered} />
            }
        </section>
    )
}

export default ActionsSection