import React from 'react'
import design from '../../../assets/images/web-design.png'
import mobile from '../../../assets/images/app-development.png'
import web from '../../../assets/images/web-programming.png'

import './Services.css'
const Services = () => {
    const services = [
        {icon: design, title: "Web Design", description: "I love web design, I use some online tools to carry out my design to its potential"},
        {icon: web, title: "Web Development", description: "I develop websites/applications, with MERN Stack or React + Firebase."},
        {icon: mobile, title: "Mobile Development", description: "Developing mobile apps is really fun for me and I do it with React Native"}
    ]
    return (
        <div className="services-container">
            <div className="services">
                <h3>THIS IS WHAT I DO...</h3>
                <div className="list">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                            <div className="service">
                                <div className="image">
                                <img src={service.icon}/>
                                </div>
                                <h4 style={{color:"#1f1f25"}}>{service.title}</h4>
                                <p style={{color:"#1d1d24bf"}}>{service.description}</p>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Services
