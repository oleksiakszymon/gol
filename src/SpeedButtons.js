import "./App.css";
import React from "react";

export default function SpeedButtons(props) {
    const { currentSpeed, changeSpeed } = props;

    function increaseSpeed() {
        if (currentSpeed < 5000) {
            changeSpeed(currentSpeed + 100);
        }
    }
    function decreaseSpeed() {
        if (currentSpeed > 100) {
            changeSpeed(currentSpeed - 100);
        }
    }

    return (
        <div id="speed-buttons-box">
            <button className="speed-button" onClick={decreaseSpeed}>
                {currentSpeed === 100 ? "MIN" : "-"}
            </button>
            <div className="speed-display">{currentSpeed / 1000}</div>
            <button className="speed-button" onClick={increaseSpeed}>
                {currentSpeed === 5000 ? "MAX" : "+"}
            </button>
        </div>
    );
}
