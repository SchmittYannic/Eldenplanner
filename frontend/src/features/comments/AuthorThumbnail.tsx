import { ImgHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type AuthorThumbnailPropsType = {
    href: string,
} & ImgHTMLAttributes<HTMLImageElement>

const AuthorThumbnail = ({
    href,
    ...rest
}: AuthorThumbnailPropsType) => {
    return (
        <div className="author-thumbnail">
            <Link
                className="img-link"
                to={href}
            >
                <div>
                    <img {...rest} />
                </div>
            </Link>
        </div>
    )
}

export default AuthorThumbnail