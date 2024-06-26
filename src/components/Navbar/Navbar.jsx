import React from "react";
import "./NavBar.css";

function Navbar() {
    return (
        <div className="navbar">
            <button>
            <img src="/public/logo.ico" alt="logo" />
            <h1>
                <span>Code</span> Log
            </h1>
            </button>
        </div>
    );
}

export default Navbar;
