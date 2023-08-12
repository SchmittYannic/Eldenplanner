import { ReactElement, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BuildType, selectBuildById } from "../builds/buildsApiSlice";
import { RootState } from "../../app/store";
import { CharplannerStateType, loadBuild } from "./charplannerSlice";

import CharacterSection from "./CharacterSection";
import EquipmentSection from "./EquipmentSection";
import InfoSection from "./InfoSection";
import ActionsSection from "./ActionsSection";
import "./Charplanner.scss";

const Charplanner = (): ReactElement => {

    const dispatch = useDispatch();
    const param = useParams();
    const buildRef = useRef<CharplannerStateType>();

    if (param?.buildId) {
        // if param and buildId exist
        const buildId = param.buildId;
        // select the build using its id from the param
        const build = useSelector((state: RootState) => selectBuildById(state, buildId)) as BuildType;

        if (build) {
            // if a build was successfully selected save it to the buildRef
            buildRef.current = {
                general: build.general,
                stats: build.stats,
                armament: build.armament,
                talisman: build.talisman,
                armor: build.armor
            };
        }
    }

    /*
        whenever the buildRef changes check if it isnt undefined 
        in case it isnt use its value to load a build done in 
        useEffect so dispatch is only getting triggered after 
        component mounted.
    */
    useEffect(() => {
        if (buildRef.current) {
            dispatch(loadBuild(buildRef.current));
        }
    }, [buildRef.current]);

    return (
        <main className="Charplanner">
            <CharacterSection />
            <EquipmentSection />
            <InfoSection />
            <ActionsSection />
        </main>
    )
};

export default Charplanner;