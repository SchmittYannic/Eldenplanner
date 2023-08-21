import { ReactElement, useState } from "react";
import SaveBuild from "./SaveBuild";

const ActionsSection = (): ReactElement => {

    const [isSaveTriggered, setIsSaveTriggered] = useState(false);

    const onSaveClicked = () => {
        setIsSaveTriggered(true)
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