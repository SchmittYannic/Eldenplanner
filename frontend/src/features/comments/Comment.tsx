import { Link } from "react-router-dom"
import { CommentType } from "src/types"

type CommentPropsType = {
    comment: CommentType,
}

const Comment = ({
    comment
}: CommentPropsType) => {
    return (
        <div className="comment">
            <div className="comment-thread">
                <div className="comment-body">
                    <div className="author-thumbnail">
                        <Link
                            className="img-link"
                            to={"/"}
                        >
                            <img src="" alt="" />
                        </Link>
                    </div>
                    <div className="comment-main">
                        <div className="comment-header">
                            <div className="comment-author">
                                <h3>author</h3>
                                <span className="published-time-text">
                                    vor 2 Stunden
                                </span>
                            </div>
                        </div>
                        <div className="comment-content">
                            <span>Lorem ipsum</span>
                        </div>
                        <div className="comment-engagement-bar">
                            <div className="toolbar">
                                <button>
                                    like
                                </button>
                                <span className="likecount">
                                    200
                                </span>
                                <button>
                                    dislike
                                </button>
                                <span className="dislikecount">
                                    5
                                </span>
                                <div className="reply-btn-wrapper">
                                    <button>
                                        reply
                                    </button>
                                </div>
                            </div>
                            <div className="reply-dialog">

                            </div>
                        </div>
                    </div>
                    <div className="comment-action-menu">

                    </div>
                </div>

                {/* Add replies here */}

            </div>
        </div>
    )
}

export default Comment