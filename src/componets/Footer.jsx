import React from 'react'
import '../css/footer.css'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import footerImage from '../images/footer-image.jpg';


export default function Footer() {
    return (
        <div className="footer">
            <div>
                <div>
                    <div className="footer-logo" >
                        <img src={logo} alt="" />
                        <span className="footer-logo-text">Tshilidzi Rambuda</span>
                    </div>
                    <span>
                    A dynamic <span>Front-End Developer </span>based in Johannesburg.
                    </span>
                    <div>
                        <img src={footerImage} alt="" />
                    </div>
                </div>
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/profile'>My Profile</Link></li>
                        <li><Link to='/skills'>My Skills</Link></li>
                        <li><Link to='/project'>My Project</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                   <h2>Contact</h2> 
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i><span>1288 Hlongwane Street,<br />
                        Phomolong, <br />
                        Tembisa, <br />
                        1632</span></li>
                        <li><i class="fas fa-phone-alt"></i><a href="tel:0670295684">067 029 5684</a></li>
                    </ul>
                </div>
                <div>
                   <h2>Skills</h2>
                   <ul className="skills-icons">
                        <li><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i></li>
                        <li><i class="fab fa-react"></i><i class="fab fa-figma"></i></li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}
