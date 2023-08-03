import React from "react";
import Panner from "./panner";

import SectionsOfOurTeam from "./SectionsOfOurTeam";



const OurTeam = (props) => {
    return (
        <div>
            <Panner URL={props.OurTeam.link} nameOfPage={props.OurTeam.name} />
            <SectionsOfOurTeam />

        </div>
    )
}
export default OurTeam;