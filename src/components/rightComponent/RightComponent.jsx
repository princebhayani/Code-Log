import React from "react";
import "./RightComponent.css";

function RightComponent() {
    return (
        <div className="right-component">
            <div className="header">
                <h3 className="heading">
                    My <span>CodeSpace</span>
                </h3>
                <button>
                <span>+</span> New Space
                </button>
            </div>
        </div>
    );
}

export default RightComponent;
