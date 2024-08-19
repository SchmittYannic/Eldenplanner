import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import { selectAuthorId } from "./charplannerSlice";
import useAuth from "src/hooks/useAuth";
import SaveBuild from "./SaveBuild";
import DeleteBuild from "./DeleteBuild";


const ActionsSection = (): ReactElement => {

    const authorId = useSelector(selectAuthorId);
    const { userId } = useAuth();

    const [isDeleteTriggered, setIsDeleteTriggered] = useState(false);
    const [isSaveTriggered, setIsSaveTriggered] = useState(false);

    const isBuildAuthor = authorId === userId;

    const onSaveClicked = () => {
        if (!userId) return
        setIsSaveTriggered(true);
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
                <DeleteBuild callback={() => setIsDeleteTriggered(false)} />
            }

            <button
                className="Charplanner__Save action-btn"
                type="button"
                onClick={onSaveClicked}
                title={!userId ? "Requires Login" : isBuildAuthor ? "Update Build" : "Save Build"}
                disabled={!userId}
            >
                {isBuildAuthor ? "Update" : "Save"}
            </button>
            {isSaveTriggered &&
                <SaveBuild callback={() => setIsSaveTriggered(false)} />
            }
        </section>
    )
}

export default ActionsSection