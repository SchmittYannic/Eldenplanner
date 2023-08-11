import { useSelector, useDispatch } from "react-redux";
import {
    selectCharactername,
    selectStartingclass,
    selectGreatrune,
    selectGreatruneactive,
    changeCharactername,
    changeStartingclass,
    changeGreatrune,
    changeGreatruneactive
} from "./charplannerSlice";
import { TextInput, Checkbox, CustomSelect } from "../../components/ui";
import StartingClassData from "../../../data/StartingClassData";

const NameSubSection = () => {
    const dispatch = useDispatch();

    const charactername = useSelector(selectCharactername);
    const startingclass = useSelector(selectStartingclass);
    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);

    const greatRuneOptions = [
        "Godrick's Great Rune",
        "Malenia's Great Rune",
        "Radahn's Great Rune",
        "Morgott's Great Rune",
        "Rykard's Great Rune",
        "Mohg's Great Rune"
    ];

    const setCharactername = (input: string) => dispatch(changeCharactername(input));
    const setStartingclass = (input: string) => dispatch(changeStartingclass(input));
    const setGreatrune = (input: string) => dispatch(changeGreatrune(input));
    const setGreatruneactive = (input: boolean) => dispatch(changeGreatruneactive(input));

    const startingClassOptions = Object.keys(StartingClassData);

    return (
        <div className="NameSubSection">
            <TextInput 
                inputText={charactername} 
                setInputText={setCharactername}
                label="Character Name"
            />
            <CustomSelect
                id="StartingClass"
                selectedOption={startingclass}
                setSelectedOption={setStartingclass}
                options={startingClassOptions}
                renderOption={(option: string) => <p className={option === startingclass ? "SelectedOption" : ""}>{option}</p>}
                classes={""}
                label="Starting Class"
            />
            <div className="Row">
                <CustomSelect 
                    id="GreatRune"
                    selectedOption={greatrune}
                    setSelectedOption={setGreatrune}
                    options={greatRuneOptions}
                    renderOption={(option:string) => <p className={option === greatrune ? "SelectedOption" : ""}>{option}</p>}
                    classes={""}
                    label="Great Rune"
                    enableDelete={true}
                />
                <Checkbox
                    label="Activate"
                    checked={greatruneactive}
                    setChecked={setGreatruneactive}
                />
            </div>
        </div>
    )
}

export default NameSubSection