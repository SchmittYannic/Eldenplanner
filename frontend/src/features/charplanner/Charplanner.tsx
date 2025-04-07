import { ReactElement, useEffect, lazy, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { useLazyGetBuildByIdQuery } from "./charplannerApiSlice";
import { selectIsDataReady, selectIsFinalError } from "./charplannerDataSlice";
import { loadBuild, resetCharplanner, selectBuildId, selectGetBuildByIdCachedData } from "src/features/charplanner/charplannerSlice";
import useWindowSize from "src/hooks/useWindowSize";
import useIsInView from "src/hooks/useIsInView";
import CharacterSection from "src/features/charplanner/CharacterSection";
import EquipmentSection from "src/features/charplanner/EquipmentSection";
import InfoSection from "src/features/charplanner/InfoSection";
import ActionsSection from "src/features/charplanner/ActionsSection";
import { ClipLoader } from "src/components/ui";
import "src/features/charplanner/Charplanner.scss";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const Charplanner = (): ReactElement => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const param = useParams();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 980;

    const isDataReady = useSelector(selectIsDataReady);
    const isFinalError = useSelector(selectIsFinalError);

    const [fetchBuildById, {
        data: loadedBuild,
        isLoading,
        isError,
        isSuccess,
    }] = useLazyGetBuildByIdQuery();

    const cachedData = useSelector((state: RootState) => {
        if (param.buildId) {
            return selectGetBuildByIdCachedData(state, param?.buildId)
        }
        return null
    })

    const buildId = useSelector(selectBuildId);

    const {
        isIntersecting,
        elementRef: CommentSectionRef,
    } = useIsInView({ shouldObserve: buildId !== null });

    // on mount reset charplanner state
    useEffect(() => {
        dispatch(resetCharplanner());
    }, []);

    // on mount check if buildId exists as param
    // if yes try fetching Build from database
    useEffect(() => {
        if (!param.buildId) return
        if (cachedData) {
            dispatch(loadBuild({
                buildId: cachedData.id,
                title: cachedData.title,
                authorId: cachedData.authorId,
                stars: cachedData.stars,
                hasGivenStar: cachedData.hasGivenStar,
                general: cachedData.general,
                stats: cachedData.stats,
                armament: cachedData.armament,
                talisman: cachedData.talisman,
                armor: cachedData.armor,
            }));
        } else {
            fetchBuildById(param.buildId);
        }
    }, [cachedData, param.buildId]);

    // if fetch is successful load Build into state
    useEffect(() => {
        if (!isSuccess) return
        if (!loadedBuild) return
        dispatch(loadBuild({
            buildId: loadedBuild.id,
            title: loadedBuild.title,
            authorId: loadedBuild.authorId,
            stars: loadedBuild.stars,
            hasGivenStar: loadedBuild.hasGivenStar,
            general: loadedBuild.general,
            stats: loadedBuild.stats,
            armament: loadedBuild.armament,
            talisman: loadedBuild.talisman,
            armor: loadedBuild.armor,
        }));
    }, [isSuccess]);

    // if fetch fails direct user to /charplanner without params
    useEffect(() => {
        if (!isError) return
        navigate("/charplanner");
    }, [isError]);

    const supportedGameVersion = String(import.meta.env.VITE_SUPPORTED_GAME_VERSION);

    if (isLoading || (!isDataReady && !isFinalError)) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={30}
                />
            </main>
        )
    }

    if (isFinalError) {
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Error fetching data for calculations</span>
                </div>
            </main>
        )
    }

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
                    Currently supports Elden Ring version <span style={{ fontWeight: "500", color: "white" }}>{supportedGameVersion}</span>
                </p>
                {buildId && (
                    <>
                        <div className="divider-4" />
                        <p>
                            Loaded Build: <span style={{ color: "white", fontWeight: "500" }}>{loadedBuild?.title || cachedData?.title}</span> by <Link className="link" to={`/user/${loadedBuild?.authorId || cachedData?.authorId}`}>{loadedBuild?.author || cachedData?.author}</Link>
                        </p>
                        <div className="divider-4" />
                        <p style={{ color: "white" }}>
                            Found this build helpful? Give it a star below to bookmark it and show your appreciation.
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
                <ActionsSection />
            </div>

            {buildId &&
                <section
                    ref={CommentSectionRef}
                    className="CommentSection"
                >
                    {isIntersecting ? (
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
                                targetId={buildId}
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