import React from "react";
import Panner from "./panner";

const LoginRegister = (props) => {
    return (
        <div>
            <Panner URL={props.Login.link} nameOfPage={props.Login.name} />

            Login/Register
        </div>
    )
}
export default LoginRegister;
