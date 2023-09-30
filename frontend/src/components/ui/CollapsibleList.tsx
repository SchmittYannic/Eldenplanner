import { ReactElement, useState } from "react";
import "./CollapsibleList.scss";

type PropsType = {
    heading: string,
    items: string[]
}

const CollapsibleList = ({ heading, items }: PropsType): ReactElement => {
    const [active, setActive] = useState(true);

    const emptyListStyle = !items.length ? { borderBottomLeftRadius: ".5em", borderBottomRightRadius: ".5em" } : {}

    return (
        <div className="collapsible-list">
            <button 
                className={active ? "collapsible-list-button active" : "collapsible-list-button"}
                tabIndex={0}
                onClick={() => setActive(!active)}
                style={emptyListStyle}
            >
                {heading}
            </button>
            {active && items.length !== 0 &&
                <div className="collapsible-list-content">
                    <ul>
                        {items.map((item, idx) =>
                            <li key={idx}>{item}</li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default CollapsibleList