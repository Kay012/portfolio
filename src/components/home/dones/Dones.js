import React from 'react'
import './Dones.css'
import writing from '../../../assets/images/writer.jpg'
import doctor from '../../../assets/images/doctor.jpg'
import ecommerce from '../../../assets/images/ecomm.jpg'

const Dones = () => {
    const projects = [
        {image: writing, title:"Siphumelele Kati", 
        description:"This is an author website, it is where people will come to find out more about the author (Siphumelele Kati) and his books. (React)", url:"https://siphumelelekati.com"},
        {image:ecommerce, title: "E-marketplace", description: "It is an e-marketplace web application, a marketplace where everyone can be a buyer or seller. (MERN Stack)", url:"https://e-marketplace1.herokuapp.com"},
        {image: doctor, title: "MyDoctor", description: "This a mobile app to find and and book appointments with your favoorite doctor. (React Native, Redux, Firebase)"}
    ]
    return (
        <div classname="dones-container">
            <h3>MY LATEST PROJECTS...</h3>
            <div>
                <span>github repository: </span> <a href="https://github.com/Kay012/" target="_blank" rel="noopener noreferrer">https://github.com/Kay012/</a>
            </div>
            <div className="dones">
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <div className="project">
                                <div className="imaged">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt=""/></a>
                                </div>
                                <span style={{fontSize: "1.8rem", paddingTop:"20px"}} >{project.title}</span>
                                <p>{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
            
        </div>
    )
}

export default Dones
