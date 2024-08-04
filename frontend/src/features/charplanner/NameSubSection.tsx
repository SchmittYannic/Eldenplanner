import { ChangeEvent, ReactElement } from "react";
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
} from "src/features/charplanner/charplannerSlice";
import { CharplannerTextInput, Checkbox, CustomSelect } from "src/components/ui";
import StartingClassData from "src/../data/StartingClassData";

const NameSubSection = (): ReactElement => {
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

    const setCharactername = (e: ChangeEvent<HTMLInputElement>) => {
        const InputValue = e.target.value;
        dispatch(changeCharactername(InputValue));
    };
    const setStartingclass = (input: string) => dispatch(changeStartingclass(input));
    const setGreatrune = (input: string) => dispatch(changeGreatrune(input));
    const setGreatruneactive = (input: boolean) => dispatch(changeGreatruneactive(input));

    const startingClassOptions = Object.keys(StartingClassData);

    return (
        <div className="NameSubSection">
            <CharplannerTextInput
                value={charactername}
                onChange={setCharactername}
                label="Character Name"
                placeholder=" "
                maxLength={16}
            />
            <CustomSelect
                id="StartingClass"
                value={startingclass}
                setValue={setStartingclass}
                options={startingClassOptions}
                label="Starting Class"
            />
            <div className="Row">
                <CustomSelect
                    id="GreatRune"
                    value={greatrune}
                    setValue={setGreatrune}
                    options={greatRuneOptions}
                    label="Great Rune"
                    enableDelete={true}
                />
                <Checkbox
                    label="Activate"
                    checked={greatruneactive}
                    setChecked={setGreatruneactive}
                    title={greatruneactive ? "Deactivate Great Rune" : "Activate Great Rune"}
                />
            </div>

            <div className="divider-2" />

        </div>
    )
}

export default NameSubSection