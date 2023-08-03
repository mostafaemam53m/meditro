import React from "react";
import './Rotation.css';

const Rotation = (props) => {
    return (
        <div className="main-rotation">
            <img src={props.img} />
        </div>
    )
}
export default Rotation;