import React from 'react';
import { BiExport } from 'react-icons/bi';
import './OutputConsole.css';

const OutputConsole = () => {
    return (
        <div className="output-console">
            <div className="output-console-header">
                Output:
                <a href={`data:text/plain;charset=utf-8,${encodeURIComponent}`} download="output.txt">
                    <BiExport /> Export Output
                </a>
            </div>
            <textarea className="text-area" disabled />
        </div>
    );
};

export default OutputConsole;
