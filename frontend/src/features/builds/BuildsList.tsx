import { ReactElement} from "react";
import { useGetBuildsQuery } from "./buildsApiSlice";
import Build from "./Build";

const BuildsList = (): ReactElement => {
    const {
        data: builds,
        isLoading,
        isSuccess,
        isError,
        error     
    } = useGetBuildsQuery("buildsList");

    let content: ReactElement = (<></>);

    if (isError) {
        let errorMsg = "";

        if ("data" in error) {
            errorMsg = error?.data?.message;
        } else {
            errorMsg = "An Error occured";
        }

        content = (
            <main>
                <p className="error">
                    {errorMsg}
                </p>
            </main>
        )
    }

    if (isLoading) {
        content = (
            <main>
                <p>
                    Loading...
                </p>
            </main>
        )
    }

    if (isSuccess) {
        const { ids } = builds;

        const tableContent = ids?.length && ids.map((buildId) => <Build key={buildId} buildId={buildId}/>)

        content = (
            <main>
                <table className="table table--builds">
                    <thead className="table__thead">
                        <tr className="table__row">
                            <th scope="col" className="table__th build__charactername">Charactername</th>
                            <th scope="col" className="table__th build__user">Author</th>
                            <th scope="col" className="table__th build__runelevel">Level</th>
                            <th scope="col" className="table__th build__stars">Stars</th>
                            <th scope="col" className="table__th user__createdAt">Created</th>
                            <th scope="col" className="table__th user__updatedAt">Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </main>
        )
    }

    return content
}

export default BuildsList