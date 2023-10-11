import { ReactElement, MouseEvent, useRef } from "react";
import "./Radialhovercards.scss";

const Radialhovercard = ({ children }: { children: ReactElement }): ReactElement => {
    return (
        <div className="radialhovercard">
            <div className="radialhovercard-content">
                <div className="radialhovercard-text">
                    { children }
                </div>
            </div>
        </div>
    )
};

const Radialhovercards = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {

    const cardsRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (cardsRef.current) {
            for (const card of cardsRef.current.childNodes) {
                if (card.nodeName === "DIV") {
                    const cardElement = card as HTMLDivElement;
                    const rect = cardElement.getBoundingClientRect();
                    const x: number = e.clientX - rect.left;
                    const y: number = e.clientY - rect.top;

                    cardElement.style.setProperty("--mouse-x", `${x}px`);
                    cardElement.style.setProperty("--mouse-y", `${y}px`);
                }
            }
        }
    };

    return (
        <div
            className="radialhovercards"
            ref={cardsRef}
            onMouseMove={(e) => handleMouseMove(e)}
        >
            {children}
        </div>
    )
};

export {
    Radialhovercards,
    Radialhovercard
}