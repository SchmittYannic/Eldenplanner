import { ReactElement, useEffect, lazy, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { useLazyGetBuildByIdQuery } from "./charplannerApiSlice";
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
    const isMobile = windowSize.width && windowSize.width < 900;

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
                general: cachedData.general,
                stats: cachedData.stats,
                armament: cachedData.armament,
                talisman: cachedData.talisman,
                armor: cachedData.armor,
            }));
        } else {
            fetchBuildById(param.buildId);
        }
    }, [cachedData]);

    // if fetch is successful load Build into state and check if user is the author
    useEffect(() => {
        if (!isSuccess) return
        if (!loadedBuild) return
        dispatch(loadBuild({
            buildId: loadedBuild.id,
            title: loadedBuild.title,
            authorId: loadedBuild.authorId,
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

    if (isLoading) {
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
                    Currently supports Elden Ring version <span style={{ fontWeight: "500", color: "white" }}>1.14.1.</span>
                </p>
                {buildId && (
                    <>
                        <div className="divider-4" />
                        <p style={{ color: "white" }}>
                            Loaded Build: <i>{loadedBuild?.title || cachedData?.title}</i> by <Link className="link" to={`/user/${loadedBuild?.authorId || cachedData?.authorId}`}>{loadedBuild?.author || cachedData?.author}</Link>
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