import { ReactElement, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BuildType, selectBuildById } from "../builds/buildsApiSlice";
import { RootState } from "../../app/store";
import { CharplannerStateType, loadBuild, resetCharplanner } from "./charplannerSlice";
import { selectUserById, UserType } from "../users/usersApiSlice";

import CharacterSection from "./CharacterSection";
import EquipmentSection from "./EquipmentSection";
import InfoSection from "./InfoSection";
import ActionsSection from "./ActionsSection";
import "./Charplanner.scss";
import useAuth from "../../hooks/useAuth";

const Charplanner = (): ReactElement => {

    const dispatch = useDispatch();
    const param = useParams();
    const buildRef = useRef<CharplannerStateType>();
    const { userId } = useAuth();

    // if param exist select Build through buildId in param
    const build = useSelector((state: RootState) => {
        if (param?.buildId) {
            return selectBuildById(state, param.buildId) as BuildType
        }
        return null
    });

    // if build exists select builds author
    const buildAuthor = useSelector((state: RootState) => {
        if(build?.user) {
            return selectUserById(state, build.user) as UserType
        }
        return null
    });

    // is the logged in the person the one, who created the build
    const isBuildAuthor = userId === build?.user;

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

    // on mount check if buildRef is undefined. If yes reset charplannerSlice.
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
            {buildAuthor && <h2>{buildAuthor.username}</h2>}
            <div className="Charplanner">
                <CharacterSection />
                <EquipmentSection />
                <InfoSection />
                <ActionsSection isBuildAuthor={isBuildAuthor} />
            </div>
        </main>
    )
};

export default Charplanner;