import { useAddNewBuildMutation } from "./charplannerApiSlice";

import CharacterSection from "./CharacterSection";
import EquipmentSection from "./EquipmentSection";
import InfoSection from "./InfoSection";

import "./Charplanner.scss";

const Charplanner = () => {
    const [addNewBuild, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewBuildMutation()

    console.log(error)

    const onSaveClicked = async () => {
        await addNewBuild({  })
    }

    return (
        <main className="Charplanner">
            <CharacterSection />
            <EquipmentSection />
            <InfoSection />
            
            {/*
            <button
                type="button"
                onClick={onSaveClicked}
            >
                Savebutton
            </button> */}
        </main>
    )
};

export default Charplanner;