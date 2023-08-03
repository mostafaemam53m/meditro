import React from "react";
import Panner from "./panner";

const FAQ = (props) => {
    return (
        <div>
            <Panner URL={props.FAQ.link} nameOfPage={props.FAQ.name} />

            FAQ
        </div>
    )
}
export default FAQ;
