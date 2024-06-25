import React from 'react'
import "./LeftComponent.css"

function LeftComponent() {
    return (
        <div className="left-component">
            <div className="container">
                <img src="/public/logo.ico" alt="logo" />
                <h1>
                    <span>Code</span> Log
                </h1>
                <div className="min-heading">Code. Compile. Debug.</div>
                <button>
                    <span>+</span> Create New CodeSpace
                </button>
            </div>
        </div>
    )
}

export default LeftComponent