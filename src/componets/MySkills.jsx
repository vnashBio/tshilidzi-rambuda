import React from 'react';
import '../css/mySkills.css';
import { Link } from 'react-router-dom';
import seo from '../images/seo-search-symbol.png';
import vb from '../images/vb-file.png';

const MySkills = () =>{
    return(
        <div className="my-skills">
            <div className="page-title"><h1 className="page-sub-head skills-title">My skills</h1>
                <div className="about-links">
                    <Link to="/">Home</Link><Link to="contact">Contact me</Link>
                </div>
            </div>
                
            <div className="skills-wrapper">
                <div>
                    <i class="fab fa-html5 skill-icon"></i>
                </div>
                
                <div>
                    <i class="fab fa-css3-alt skill-icon"></i>
                </div>

                <div>
                    <i class="fab fa-js skill-icon"></i>
                </div>

                <div>
                    <i class="fab fa-react skill-icon"></i>
                </div>

                <div>
                    <img src={seo} alt="" />
                </div>

                <div>
                    <img src={vb} alt="" />
                </div>

                <div>
                    <i class="fab fa-figma skill-icon"></i>
                </div>
            </div>    
        </div>
    )
}
export default MySkills;

