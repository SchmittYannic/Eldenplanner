import { ReactElement, useState } from "react";
import "./CollapsibleList.scss";

type PropsType = {
    heading: string,
    items: string[]
}

const CollapsibleList = ({ heading, items }: PropsType): ReactElement => {
    const [active, setActive] = useState(true);
    return (
        <div className="CollapsibleList">
            <button 
                className={active ? "CollButton Active" : "CollButton"}
                tabIndex={0}
                onClick={() => setActive(!active)}
            >
                {heading}
            </button>
            {active &&
                <div className="CollContent">
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