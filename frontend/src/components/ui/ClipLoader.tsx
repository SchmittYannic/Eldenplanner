import "./ClipLoader.scss"

type ClipLoaderPropsType = {
    loading: boolean,
    color?: string,
    size: number,
}

const ClipLoader = ({
    loading,
    color = "currentColor",
    size = 20,
}: ClipLoaderPropsType) => {
    return (
        <>
            {loading && (
                <div
                    className="cliploader"
                    style={{
                        width: size + "px",
                        height: size + "px",
                    }}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                >
                    <div
                        className="cliploader-section"
                        style={{
                            borderTopColor: color,
                            borderLeftColor: color,
                            borderBottomColor: color,
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default ClipLoader