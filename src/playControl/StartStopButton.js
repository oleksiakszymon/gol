import "../App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startStop } from "../playControl/isPlayingActions";

export default function StartStopButton(props) {
    const isPlaying = useSelector((state) => state.isPlayingReducer);
    let dispatch = useDispatch();
    function togglePlay() {
        dispatch(startStop());
    }
    return (
        <button onClick={togglePlay} className="start-stop-bt">
            {isPlaying === false ? "START" : "STOP"}
        </button>
    );
}
