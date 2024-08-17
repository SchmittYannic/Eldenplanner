import { ReactElement, useEffect, useRef, lazy, Suspense, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "src/app/store";
import { BuildType, selectBuildById } from "src/features/builds/buildsApiSlice";
import { selectUserById } from "src/features/users/usersApiSlice";
import {
    CharplannerStateType,
    loadBuild,
    resetCharplanner,
} from "src/features/charplanner/charplannerSlice";

import useAuth from "src/hooks/useAuth";
import useWindowSize from "src/hooks/useWindowSize";
import CharacterSection from "src/features/charplanner/CharacterSection";
import EquipmentSection from "src/features/charplanner/EquipmentSection";
import InfoSection from "src/features/charplanner/InfoSection";
import ActionsSection from "src/features/charplanner/ActionsSection";
import { ClipLoader } from "src/components/ui";
import { UserType } from "src/types";
import "src/features/charplanner/Charplanner.scss";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const Charplanner = (): ReactElement => {

    const windowSize = useWindowSize();
    const dispatch = useDispatch();
    const param = useParams();
    const buildRef = useRef<CharplannerStateType>();
    const { userId } = useAuth();
    const isMobile = windowSize.width && windowSize.width < 900;
    const CommentSectionRef = useRef(null);
    const [loadComponent, setLoadComponent] = useState(false);

    // if param exist select Build through buildId in param
    const build = useSelector((state: RootState) => {
        if (param?.buildId) {
            return selectBuildById(state, param.buildId) as BuildType
        }
        return null
    });

    // if build exists select builds author
    const buildAuthor = useSelector((state: RootState) => {
        if (build?.user) {
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoadComponent(true);
                    observer.disconnect();  // Stop observing after loading
                }
            },
            {
                root: null, // Use the viewport as the container
                rootMargin: "0px",
                threshold: 0.1, // Trigger when at least 10% of the target is visible
            }
        );

        if (CommentSectionRef.current) {
            observer.observe(CommentSectionRef.current);
        }

        return () => {
            if (observer && CommentSectionRef.current) {
                observer.unobserve(CommentSectionRef.current);
            }
        };
    }, []);

    return (
        <main>
            <div className="charplanner__header">
                <h1>Eldenring Character Planner</h1>
                <div className="divider-4" />
                <p>
                    Please be aware that Elden Ring calculations can be quite intricate, so some may be incomplete or inaccurate. If you come across any errors or missing information, feel free to reach out to us <Link to={"/contactform"}>here</Link>.
                </p>
                <div className="divider-2" />
                <div className="divider-1" />
                <p>
                    Currently supports Elden Ring version <span style={{ fontWeight: "500", color: "white" }}>1.13.1.</span>
                </p>
                {buildAuthor && (
                    <>
                        <div className="divider-4" />
                        <p style={{ color: "white" }}>
                            Loaded Build: <i>{build?.title}</i> by <Link className="link" to={`/user/${buildAuthor.id}`}>{buildAuthor.username}</Link>
                        </p>
                    </>
                )}
                <div className="divider-4" />
                <div className="divider-2" />
            </div>

            <div className="Charplanner">
                <CharacterSection />
                {isMobile && <div className="divider-4" />}
                {!isMobile ? <div className="vertical-divider" /> : <div className="horizontal-divider" />}
                {isMobile && <div className="divider-4" />}
                <EquipmentSection />
                {isMobile && <div className="divider-4" />}
                {!isMobile ? <div className="vertical-divider" /> : <div className="horizontal-divider" />}
                {isMobile && <div className="divider-4" />}
                <InfoSection />
                <ActionsSection isBuildAuthor={isBuildAuthor} />
            </div>

            {param?.buildId &&
                <section
                    ref={CommentSectionRef}
                    className="CommentSection"
                >
                    {loadComponent ? (
                        <Suspense
                            fallback={
                                <ClipLoader
                                    color={"rgb(231, 214, 182)"}
                                    loading={true}
                                    size={30}
                                />
                            }
                        >
                            <CommentSection
                                targetId={param.buildId}
                                targetType="Build"
                            />
                        </Suspense>
                    ) : (
                        <div>Comment section will load when visible</div>
                    )}
                </section>
            }
        </main>
    )
};

export default Charplanner;