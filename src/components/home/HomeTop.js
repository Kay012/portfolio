import React from 'react'
import picture from '../../assets/images/picture.jpeg'
import './HomeTop.css'
const HomeTop = () => {
    return (
        <div className="top-container">
            <div className="top">
                <div className="top__left">
                    {/* <span>Hi Welcome to my home.</span> */}
                    <span style={{color:'#808080'}}>Hi, I'm Mkhululi Cebani.</span>
                    <span style={{fontSize: '20px'}}>THIS IS MY PORTFOLIO.</span>
                </div>

                <div className="top__right">
                    <div className="image-container">
                        {/* <div className="image"> */}
                            <img src={picture} alt="" />
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeTop
