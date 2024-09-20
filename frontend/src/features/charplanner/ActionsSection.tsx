import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAddStarMutation, useDeleteStarMutation } from "./charplannerApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import { selectAuthorId, selectBuildId, selectHasGivenStar, selectStars } from "./charplannerSlice";
import useAuth from "src/hooks/useAuth";
import SaveBuild from "./SaveBuild";
import DeleteBuild from "./DeleteBuild";
import { MdOutlineStar, MdOutlineStarBorder } from "src/components/icons";


const ActionsSection = (): ReactElement => {

    const dispatch = useDispatch()
    const buildId = useSelector(selectBuildId);
    const authorId = useSelector(selectAuthorId);
    const stars = useSelector(selectStars);
    const hasGivenStar = useSelector(selectHasGivenStar);
    const { userId } = useAuth();

    const [addStar] = useAddStarMutation();
    const [deleteStar] = useDeleteStarMutation();

    const [isDeleteTriggered, setIsDeleteTriggered] = useState(false);
    const [isSaveTriggered, setIsSaveTriggered] = useState(false);

    const isBuildAuthor = authorId === userId;

    const starButtonTitle = isBuildAuthor
        ? `Author cannot star own Build (${stars})`
        : !userId
            ? `Starring Builds requires login (${stars})`
            : hasGivenStar
                ? `Unstar this Build (${stars})`
                : `Star this Build (${stars})`

    const onSaveClicked = () => {
        if (!userId) return
        setIsSaveTriggered(true);
    };

    const onDeleteClick = () => setIsDeleteTriggered(true);

    const onStarClicked = async () => {
        if (!buildId) return
        if (!userId) return
        if (isBuildAuthor) return
        try {
            if (hasGivenStar) {
                await deleteStar({
                    buildId,
                    userId,
                }).unwrap()
            } else {
                await addStar({
                    buildId,
                    userId,
                }).unwrap();
            }
        } catch (err) {
            dispatch(addToast({
                type: "error",
                text: `${hasGivenStar ? "Removing" : "Adding"} star failed`,
            }));
        }
    }

    return (
        <section className="charplanner__actionscontainer">
            {stars !== null &&
                <button
                    className="button"
                    type="button"
                    onClick={onStarClicked}
                    title={starButtonTitle}
                    // disabled for the author and non authenticated users
                    disabled={isBuildAuthor || userId === ""}
                >
                    <span className="icon-container">
                        {hasGivenStar ?
                            <MdOutlineStar
                                height={20}
                                color="hsl(46.6 39.13% 68.43% / 1)"
                                aria-hidden
                            />
                            :
                            <MdOutlineStarBorder
                                height={20}
                                aria-hidden
                            />
                        }
                    </span>
                    <span>
                        {hasGivenStar ? "Starred" : "Star"}&nbsp;
                    </span>
                    <span>
                        {stars}
                    </span>
                </button>
            }

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