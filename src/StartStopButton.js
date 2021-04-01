import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

export default function StartStopButton(props) {
    const { startStopFunction } = props;
    const isStarted = useSelector((state) => state.playIntervalReducer);
    return (
        <button onClick={startStopFunction} className="start-stop-bt">
            {isStarted === null ? "START" : "STOP"}
        </button>
    );
}
