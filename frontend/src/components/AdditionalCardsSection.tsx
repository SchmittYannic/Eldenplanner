import { ReactElement } from "react";
import { AiFillGift, AiOutlineClockCircle } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";

import { Radialhovercard, Radialhovercardimg, Radialhovercards, Radialhovercardtext } from "./ui";

const AdditionalCardsSection = (): ReactElement => {
    return (
        <section className="cards-section full">
            <h2>Why use Eldenplanner?</h2>
            <Radialhovercards>
                <Radialhovercard>
                    <Radialhovercardimg>
                        <AiFillGift />
                    </Radialhovercardimg>
                    <Radialhovercardtext>
                        <h3>Free</h3>
                        <p>Eldenplanner is completely free of charge.</p>
                    </Radialhovercardtext>
                    <div className="radialhovercard-bg" />
                </Radialhovercard>
                <Radialhovercard>
                    <Radialhovercardimg>
                        <AiOutlineClockCircle />
                    </Radialhovercardimg>
                    <Radialhovercardtext>
                        <h3>Up to date</h3>
                        <p>Using the most recent gameversion for the calculations.</p>
                    </Radialhovercardtext>
                    <div className="radialhovercard-bg" />
                </Radialhovercard>
                <Radialhovercard>
                    <Radialhovercardimg>
                        <GiNetworkBars />
                    </Radialhovercardimg>
                    <Radialhovercardtext>
                        <h3>Continuous Development</h3>
                        <p>More features rolling out soon.</p>
                    </Radialhovercardtext>
                    <div className="radialhovercard-bg" />
                </Radialhovercard>
            </Radialhovercards>
        </section>
    )
}

export default AdditionalCardsSection