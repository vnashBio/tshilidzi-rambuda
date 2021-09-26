import React from 'react';
import '../css/myprojects.css';
import { Link } from 'react-router-dom';

const MyProjects = () =>{
    return(
        <div className="projects">
            <div className="page-title"><h1 className="page-sub-head projects-title">My project</h1>
                <div className="about-links">
                    <Link to="/">Home</Link><Link to="contact">Contact me</Link>
                </div>
            </div>
            <div className="projects-cards">
                <div>
                    <div class="prject-discription">
                        <p>A three page website design created using Html, JavaScript, Css and React.js</p>
                        <a href="https://tshilidzi-rambuda-slik-gym.netlify.app/" class="view-proj-btn">View Project</a>
                    </div> 
                </div>
                
            </div>
        </div>  
    )
}
export default MyProjects;