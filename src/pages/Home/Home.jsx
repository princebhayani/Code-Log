import React from 'react'
import "./Home.css";
import LeftComponent from '../../components/leftComponent/LeftComponent';
import RightComponent from '../../components/rightComponent/RightComponent';

function Home() {
    return (
        <div className='home'>
            <LeftComponent />
            <RightComponent />
            Home
        </div>
    )
}

export default Home