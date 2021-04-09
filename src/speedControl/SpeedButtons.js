import "../App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementByAmount,
    decrementByAmount,
} from "../speedControl/tickSpeedActions";

export default function SpeedButtons() {
    const currentSpeed = useSelector((state) => state.tickSpeedReducer);
    const dispatch = useDispatch();

    function increaseSpeed() {
        if (currentSpeed < 5000) {
            dispatch(incrementByAmount(100));
        }
    }
    function decreaseSpeed() {
        if (currentSpeed > 100) {
            dispatch(decrementByAmount(100));
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
