import React from 'react';
import '../css/myProfile.css';
import { Link } from 'react-router-dom';
import aboutImg from '../images/user.svg';
import pdf from '../documents/tshilidzi-cv.pdf';

const MyProfile = () =>{

    function onResumeClick() {
        window.open(pdf);
      }

    return(
        <div className="about-me-wrapper">
            <div className="page-title">
                <h1 className="page-sub-head about-me-title">About me</h1>
                <div className="about-links">
                    <Link to="/">Home</Link><Link to="contact">Contact me</Link>
                </div>
            </div>
            <div className="about-me">
                <div className="about-image">
                    <img src={aboutImg} alt=""></img>
                </div>
                <div>
                    <h1>A dynamic <span>Front-End Developer </span>based in Johannesburg.</h1>
                    <p>I am a web designer,  who is very passionate and dedicated to his work. 
                        With almost 5 years experience working with web development technologies 
                        like HTML, CSS, JavaScript and React.js as well as 7 months corporate
                        experience at Ecat Online as an enthusiastic professional web developer, 
                        I have acquired the skills and knowledge necessary to make your project a success. 
                        I enjoy every step of the design process, from discussion to collaboration.</p>
                        <div class="personal-details">
                            <div>
                                <span><span>Email: </span>rambudatshilidzi1@gmail.com</span> <br />
                                <span><span>Age: </span> 25</span>
                            </div>
                        </div>
                        <a href="JavaScript:void()" alt="" class="resume" onClick={onResumeClick}>Download CV</a>
                </div>
            </div>
            
        </div>
    )
}
export default MyProfile;