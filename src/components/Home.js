import React from 'react'
import BodyTop from './home/body/BodyTop'
import Dones from './home/dones/Dones'
import HomeTop from './home/HomeTop'
import Services from './home/services/Services'

const Home = () => {
    return (
        <div>
            <HomeTop/>
            <br/>
            <BodyTop/>
            <br/>
            <Services/>
            <br/>
            <Dones/>
        </div>
    )
}

export default Home
