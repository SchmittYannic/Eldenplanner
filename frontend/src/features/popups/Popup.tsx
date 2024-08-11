import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPopup, setPosition } from "./popupSlice";
import CommentOptionlist from "./CommentOptionlist";
import "src/features/popups/Popup.scss";

const Popup = () => {

    const dispatch = useDispatch();
    const {
        refId,
        isOpen,
        type,
    } = useSelector(selectPopup);

    // whenever refId changes
    useEffect(() => {
        // reset Position
        dispatch(setPosition({}));
        // get element belonging to refId
        if (!refId) return
        const element = document.getElementById(refId);
        if (!element) return

        // set position of popup on resize of window
        const handleResize = () => {
            const rect = element.getBoundingClientRect();

            dispatch(setPosition({
                top: rect.bottom + window.scrollY,
                right: window.innerWidth - rect.right + window.scrollX,
            }));
        }

        // when open initial set position of popup
        if (isOpen) handleResize();

        window.addEventListener("resize", handleResize);

        () => window.removeEventListener("resize", handleResize);
    }, [refId]);

    if (!isOpen) return null;

    switch (type) {
        case "COMMENT_OPTIONLIST":
            return <CommentOptionlist />
        default:
            return null;
    }
}

export default Popup