import React from 'react'
import Select from 'react-select';
import "./EditContainer.css"
import { BiEditAlt, BiImport, BiExport, BiFullscreen } from 'react-icons/bi';
function EditContainer() {

    return (
        <div className={`editor-container`}>
            <div className="upper-toolbar">
                <div className="header">
                    <div className="title">
                        <h3>title</h3>
                        <BiEditAlt />
                    </div>
                    <button className="button" >Save code</button>
                </div>
                <div className="select-bars">
                    <Select />
                    <Select />
                </div>
            </div>
            <div className="code-editor-container">

            </div>
            <div className="lower-toolbar">
                <button >
                    <BiFullscreen />
                </button>
                <label htmlFor="codefile">
                    <input type="file" accept="." id="codefile" /> <BiImport /> Import Code
                </label>
                <a href={`data:text/plain;charset=utf-8}`} download="code.txt">
                    <BiExport /> Export Code
                </a>
                <button className="save-and-run-button" >Run Code</button>
            </div>
        </div>
    );
}

export default EditContainer;
