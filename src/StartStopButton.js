import "./App.css";
import React from "react";

export default function StartStopButton(props) {
    const { startStopFunction, isStarted } = props;

    return (
        <button onClick={startStopFunction} className="start-stop-bt">
            {isStarted === null ? "START" : "STOP"}
        </button>
    );
}
