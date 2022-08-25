import React from 'react'
import './Dones.css'
import writing from '../../../assets/images/writer.jpg'
import todo from '../../../assets/images/todos.jpg'
import ecommerce from '../../../assets/images/ecomm.jpg'

const Dones = () => {
    const projects = [
        {image: writing, title:"Siphumelele Kati", 
        description:"This is an author website, it is where people will come to find out more about the author (Siphumelele Kati) and his books. (React)", url:"https://siphumelelekati.com"},
        {image:ecommerce, title: "E-marketplace", description: "It is an e-marketplace web application, a marketplace where everyone can be a buyer or seller. (MERN Stack)", url:"https://e-marketplace1.herokuapp.com"},
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
