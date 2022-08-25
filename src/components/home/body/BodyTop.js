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
                        <p>I am enthusiastic about software engineering, problem solving, entrepreneurship. Eager to learn new abilities 
                                and skills to contribute to team success through hard work and determination. I am a passionate, and tenacious 
                            individual that possesses excellent communication skills.
                        </p>
                        <p>
                        Looking forward to opportunities to continue growing in the technology field where I can progress and develop 
my skills through various innovative and exciting dynamics.

                        </p>
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
                            <h5>Bcom Information System -University of Johannesburg | 2019-2022</h5>
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
