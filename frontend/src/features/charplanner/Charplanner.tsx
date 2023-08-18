import { ReactElement, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BuildType, selectBuildById } from "../builds/buildsApiSlice";
import { RootState } from "../../app/store";
import { CharplannerStateType, loadBuild, resetCharplanner } from "./charplannerSlice";
import { UserType, selectUserById } from "../users/usersApiSlice";

import CharacterSection from "./CharacterSection";
import EquipmentSection from "./EquipmentSection";
import InfoSection from "./InfoSection";
import ActionsSection from "./ActionsSection";
import "./Charplanner.scss";

const Charplanner = (): ReactElement => {

    const dispatch = useDispatch();
    const param = useParams();
    const buildRef = useRef<CharplannerStateType>();
    
    let buildAuthor: string = "";

    if (param?.buildId) {
        // if param and buildId exist
        const buildId = param.buildId;
        // select the build using its id from the param
        const build = useSelector((state: RootState) => selectBuildById(state, buildId)) as BuildType;

        const { username } = useSelector((state: RootState) => selectUserById(state, build.user) as UserType);

        buildAuthor = username;

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

    useEffect(() => {
        if (!buildRef.current) {
            dispatch(resetCharplanner());
        }
    }, []);

    /*
        whenever the buildRef changes check if it isnt undefined. 
        In case it isnt use its value to load a build. Done in 
        useEffect so dispatch is only getting triggered after 
        component mounted.
    */
    useEffect(() => {
        if (buildRef.current) {
            dispatch(loadBuild(buildRef.current));
        }
    }, [buildRef.current]);

    return (
        <main>
            {buildAuthor && <h2>{buildAuthor}</h2>}
            <div className="Charplanner">
                <CharacterSection />
                <EquipmentSection />
                <InfoSection />
                <ActionsSection />
            </div>
        </main>
    )
};

export default Charplanner;