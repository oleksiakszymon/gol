import "../App.css";
import React from "react";

export default function NextStepButton(props) {
    const { nextStepFunction } = props;

    return (
        <button onClick={nextStepFunction} className="next-step-bt">
            Next step
        </button>
    );
}
