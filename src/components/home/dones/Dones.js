import React from 'react'
import './Dones.css'
import writing from '../../../assets/images/writer.jpg'
import todo from '../../../assets/images/todos.jpg'
import ecommerce from '../../../assets/images/ecomm.jpg'

const Dones = () => {
    const projects = [
        {image: writing, title:"Siphumelele Kati", 
        description:"This is an author website, it is where people will come to find out more about the author (Siphumelele Kati) and his books. (React)"},
        {image:ecommerce, title: "Kay Online Store", description: "It is an eccomerce web app, an online shop whereby people can obtain things for sale through the web. (MERN Stack)"},
        {image: todo, title: "Todo-App", description: "This a mobile app which lets you write, organize, and reprioritize your tasks more efficiently. (React Native, Redux, Firebase)"}
    ]
    return (
        <div classname="dones-container">
            <h3>MY LATEST PROJECTS...</h3>
            <div className="dones">
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <div className="project">
                                <div className="imaged">
                                    <img src={project.image} alt=""/>
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
