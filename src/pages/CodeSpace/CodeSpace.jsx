import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import EditContainer from '../../components/EditContainer/EditContainer'
import "./CodeSpace.css";
import InputConsole from '../../components/InputConsole/InputConsole';
function CodeSpace() {
    return (
        <div>
            <Navbar />
            <div className='code-space-container'>
                <EditContainer />
                <div className='consol-div'>
                    <InputConsole />
                </div>
            </div>
        </div>
    )
}

export default CodeSpace