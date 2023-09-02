import { ReactElement, useState } from "react";
import SaveBuild from "./SaveBuild";
import useAuth from "../../hooks/useAuth";

type PropsType = {
    isBuildAuthor: boolean
};

const ActionsSection = ({ isBuildAuthor }: PropsType): ReactElement => {

    const { status } = useAuth();

    const [isSaveTriggered, setIsSaveTriggered] = useState(false);

    const onSaveClicked = () => {
        if (status !== "Visitor") {
            setIsSaveTriggered(true);
        }
        // else missing for when Visitor presses save
        // show some errmsg
    };

    return (
        <section className="Charplanner__actionscontainer">     
            <button
                className="Charplanner__Save action-btn"
                type="button"
                onClick={onSaveClicked}
                title={status === "Visitor" ? "Requires Login" : "Save Build"}
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