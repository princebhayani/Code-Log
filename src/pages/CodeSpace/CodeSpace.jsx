import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import EditContainer from '../../components/EditContainer/EditContainer'
import "./CodeSpace.css";
function CodeSpace() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <EditContainer />
                <div className='consol-div'>
                </div>
            </div>
        </div>
    )
}

export default CodeSpace