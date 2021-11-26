import React from 'react'
import './BodyTop.css'
const BodyTop = () => {
    return (
        <div className="bodytop-container">
            <div className="bodytop">
                <div className="bodytop__left">
                    <div className="left__top">
                        <div className="about-container">
                        <h4>About me</h4>
                        </div>

                    </div>
                    <div className="left__bottom">
                        <p>Enthusiastic about software engineering, problem solving, entrepreneurship. Eager to contribute to team success 
through hard work, attention to detail and excellent organizational skills.
I love learning, and most of the technologies and frameworks I use for development I technically learnt on my 
very own.</p>
                    </div>

                </div>
                <div className="bodytop__right">
                    <div className="experience-container">
                        <h4>Education and Certification</h4>
                    </div>
                    <div className="items">
                        <ul>
                            <li key={0}>
                            <div className="item">
                            <h5>Bcom Information System -University of Johannesburg | 2019-2021</h5>
                                <p>
                                    {/* This degree is mainly about learning to apply technology to business. Information Systems field takes 
technology and links it with the commercial world. The field educates students to apply technology for 
the company's benefit. */}
                                </p>
                        </div>
                            </li>
                            <li key={1}>
                            <div className="item">
                            <h5>Front-End Web Development with React - Coursera | 2020</h5>
                            <p></p>
                        </div>
                            </li>
                            <li key={2}>
                            <div className="item">
                            <h5>Multiplatform Mobile App Development with React Native - Coursera | 2020</h5>
                            <p></p>
                        </div>

                            </li>
                            <li key={3}>
                            <div className="item">
                            <h5>Server-side Development with NodeJS, Express and MongoDB | 2020</h5>
                            <p></p>
                        </div>
                            </li>
                        </ul>
                        

                        

                        
                        
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default BodyTop
