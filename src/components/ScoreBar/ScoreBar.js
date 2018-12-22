import React from "react";
import "./ScoreBar.css";

let ScoreBar = props =>(
    <div className="score-bar text-center">
        <h3>Score: {props.score}</h3>
    </div>
);

export default ScoreBar;