import React from "react";
import "./Wrapper.css";

let Wrapper = props => (
    <div className="container">
        <div className="wrapper">
            {props.children}
        </div>
    </div>
);

export default Wrapper;