import React from "react";
import Panner from "./panner";
const Booking = (props) => {
    return (
        <>
            <Panner URL={props.Booking.link} nameOfPage={props.Booking.name} />

            <div className="p-5 mt-5 text-center">
                Booking
            </div>
        </>
    )
}
export default Booking;

