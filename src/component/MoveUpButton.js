import React, { useState, useEffect } from "react";
import "./MoveUpButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const MoveUpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.screenY) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const moveToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            id="move-up"
            className={showButton ? "visible" : ""}
            onClick={moveToUp}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
};

export default MoveUpButton;
