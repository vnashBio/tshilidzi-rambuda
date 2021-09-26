import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import bannerCss from './cssslider_files/csss_engine1/style.css';
import webDevelopment from './cssslider_files/csss_images1/webdevelopment.jpg';
import collaboration from './cssslider_files/csss_images1/collaboration.jpg';
import creativeWork from './cssslider_files/csss_images1/creativework.jpg';
import myProfileImage from '../images/tshilidzi-rambuda.png';

const Introduction = () =>{


    return(
        <div className="introduction">
        <link rel="stylesheet" href={bannerCss}></link>
		<div className="home-banner">
		<div id="sliderWrapp">
		 <div className='csslider1 autoplay '>
		<input name="cs_anchor1" id='cs_slide1_0' type="radio" className='cs_anchor slide' />
		<input name="cs_anchor1" id='cs_slide1_1' type="radio" className='cs_anchor slide' />
		<input name="cs_anchor1" id='cs_slide1_2' type="radio" className='cs_anchor slide' />
		<input name="cs_anchor1" id='cs_play1' type="radio" className='cs_anchor' checked />
		<input name="cs_anchor1" id='cs_pause1_0' type="radio" className='cs_anchor pause' />
		<input name="cs_anchor1" id='cs_pause1_1' type="radio" className='cs_anchor pause' />
		<input name="cs_anchor1" id='cs_pause1_2' type="radio" className='cs_anchor pause' />
		<ul>
			<li className="cs_skeleton"><img src={collaboration} alt ="" style={{width: "100%"}} /></li>
			<li className='num0 img slide'> <img src={collaboration} alt='' title='' /></li>
			<li className='num1 img slide'> <img src={creativeWork} alt='' title='' /></li>
			<li className='num2 img slide'> <img src={webDevelopment} alt='' title='' /></li>
		</ul>
		<div className='cs_description'>
			<label className='num0'><span className="cs_title">
                <span className="cs_wrapper">
                <strong><span>Web</span> Development</strong><br/><br/> 
                I Develop stunning and responsive websites and web applications from pre-designed layouts.
                </span><br/><br/>
                <Link to="contact">Get In Touch</Link></span>
            </label>

			<label className='num1'><span className="cs_title">
                <span className="cs_wrapper">
                <strong><span>Web</span> Design</strong><br/><br/>
                I Design modern, beautiful and attractive websites and web applications using various porpular web design tools
                </span><br/><br/>
                <Link to="contact">Get In Touch</Link></span>
            </label>

			<label className='num2'><span className="cs_title">
                <span className="cs_wrapper">
                <strong><span>Web</span> Maintenance</strong><br/><br/>
                I do day to day website updates, maintainance as well as optimisation</span><br/><br/>
                <Link to="contact">Get In Touch</Link></span>
            </label>
		</div>
		
		<div className='cs_arrowprev'>
			<label className='num0' for='cs_slide1_0'><span><i></i><b></b></span></label>
			<label className='num1' for='cs_slide1_1'><span><i></i><b></b></span></label>
			<label className='num2' for='cs_slide1_2'><span><i></i><b></b></span></label>
		</div>
		<div className='cs_arrownext'>
			<label className='num0' for='cs_slide1_0'><span><i></i><b></b></span></label>
			<label className='num1' for='cs_slide1_1'><span><i></i><b></b></span></label>
			<label className='num2' for='cs_slide1_2'><span><i></i><b></b></span></label>
		</div>
		<div className='cs_bullets'>
			<label className='num0' for='cs_slide1_0'> <span className='cs_point'></span>
				<span className='cs_thumb'><img src='cssslider_files/csss_tooltips1/collaboration.jpg' alt='collaboration' title='collaboration' /></span></label>
			<label className='num1' for='cs_slide1_1'> <span className='cs_point'></span>
				<span className='cs_thumb'><img src='cssslider_files/csss_tooltips1/creativework.jpg' alt='creative-work' title='creative-work' /></span></label>
			<label className='num2' for='cs_slide1_2'> <span className='cs_point'></span>
				<span className='cs_thumb'><img src='cssslider_files/csss_tooltips1/webdevelopment.jpg' alt='web-development' title='web-development' /></span></label>
		</div>
		</div>

        </div>
        <div className="mobile-banner">
			<h2><span>Web</span> Developer</h2>
			<p>I design creative, modern and attractive websites and web applications.</p>
			<Link to="contact">Get In Touch</Link>
		</div>
	</div>

	<div className="services-wrapper">
        <h2 className="service-title"><i class="fas fa-truck-loading"></i> My Services</h2>
		<div className="my-services">
			<div>
				<i class="fas fa-pen-nib service-icon"></i>
				<h2>UI/UX Design</h2>
				<p>I design creative, modern and attractive websites and web applications.</p>
			</div>
			<div>
				<i class="fab fa-html5 service-icon"></i>
				<h2>Web Development</h2>
				<p>I develop responsive web applications and static websites using various popular web technologies.</p>
			</div>
			<div>
				<i class="fab fa-figma service-icon"></i>
				<h2>Graphic Designing</h2>
				<p>From Image Editing to Logo Designs I am just the right person for the job.</p>
			</div>
			<div>
				<i class="fab fa-google service-icon"></i>
				<h2>SEO</h2>
				<p>Search Engine Optimisation, making sure your business is ranked number one on google.</p>
			</div>
			
		</div>
    </div>
	
	<div className="home-introduction">
		<div className="left-num">
			<div className="intro-number-one">
				<h2>Collaboration</h2>
			</div>
			<div>
				<div className="collab-image-one"></div>
			</div>
			<div>
				<p>I collaborate with you as a client, through video call and emails
					to get and draft the specifications, strategise and be on the same page.  
				</p>
			</div>
		</div>

		<div className="right-num">
			<div>
				<p>After getting the specifications from the client I design the website layout
					using popular technologies like figma. 
				</p>
			</div>
			<div>
				<div className="collab-image-two"></div>
			</div>
			<div className="intro-number-two">
				<h2>Design</h2>
			</div>
		</div>

		<div className="left-num">
			<div className="intro-number-three">
				<h2>Develop</h2>
			</div>
			<div>
				<div className="collab-image-three"></div>
			</div>
			<div>
				<p>I then turn the ideas to reality, developing the website using web technologies 
					like HTML, CSS, JavaScript and React.js.  
				</p>
			</div>
		</div>

		<div className="right-num">
			<div>
				<p>For the life of your site, I then maintain and do regular updates. 
				</p>
			</div>
			<div>
				<div className="collab-image-four"></div>
			</div>
			<div className="intro-number-four">
				<h2>Maintain</h2>
			</div>
		</div>
	</div>

	<div class="call-to-action">
		<div>
			<span>Need a <span>Website</span> <br/> done just the way you expect. Stunning,
			responsive and attractive?</span>
			<p>Then I am just the right person to deliver to you the best website that perfectly 
				expresses Your business.
			</p>
		</div>
		<div>
			<a href="tel:0670295684"><i class="fas fa-phone-alt"></i>Give me a Call</a>
			<Link to="contact"><i class="fas fa-info-circle"></i>Free Quote</Link>
		</div>
	</div>
    </div>
    )
}
export default Introduction;