import { ReactElement, useState } from "react";
import SaveBuild from "./SaveBuild";
import useAuth from "../../hooks/useAuth";

const ActionsSection = (): ReactElement => {

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
                className="Charplanner__Save btn"
                type="button"
                onClick={onSaveClicked}
            >
                Save
            </button>
            {isSaveTriggered && <SaveBuild setTrigger={setIsSaveTriggered} />}
        </section>
    )
}

export default ActionsSection