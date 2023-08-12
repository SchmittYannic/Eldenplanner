import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useAddNewBuildMutation } from "./charplannerApiSlice";
import { selectCharplannerData } from "./charplannerSlice";

const ActionsSection = (): ReactElement => {

    const charplannerData = useSelector(selectCharplannerData);

    const [addNewBuild, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewBuildMutation();

    console.log(error)

    const onSaveClicked = async () => {
        await addNewBuild({ userId: "64d1293a6d56a51cd0f72ac4" , data: charplannerData })
    }

    return (
        <section className="Charplanner__actionscontainer">
            <button
                className="Charplanner__Save btn"
                type="button"
                onClick={onSaveClicked}
            >
                Save
            </button>
            {isLoading &&  <p>is Loading...</p>}
        </section>
    )
}

export default ActionsSection