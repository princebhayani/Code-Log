import React from 'react';
import { BiImport } from 'react-icons/bi';
import './InputConsole.css';

const InputConsole = () => {
    return (
        <div className="input-console">
            <div className="header">
                Input:
                <label htmlFor="inputfile">
                    <input type="file" accept="." id="inputfile" />
                    <BiImport />
                    Import Input
                </label>
            </div>
            <textarea
                className="textArea"
            />
        </div>
    );
}

export default InputConsole;
