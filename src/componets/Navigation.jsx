import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css'
import logo from '../images/logo.svg';
import { useMediaQuery } from 'react-responsive'
import myProfileImage from '../images/tshilidzi-rambuda.png';


const Navigation = () =>{

    //navigation float script
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navigation").style.background = "#fff";
            document.querySelector(".navigation > span > i").style.color = "#6b6beb";
            document.querySelector(".nav-menu a:last-of-type").style.border = "solid #6b6beb";
            const navItems = document.querySelectorAll(".nav-menu a");
            var  i = 0
            for(i ; i < navItems.length; i++){
                navItems[i].style.color="black";
            }
        } else {
            document.querySelector(".navigation").style.cssText="background: linear-gradient(45deg, #565688, #0e0e21)";
            document.querySelector(".nav-menu a").style.color = "#fff";
            document.querySelector(".navigation > span > i").style.color = "#fff";
            document.querySelector(".nav-menu a:last-of-type").style.border = "solid white";
            const navItems = document.querySelectorAll(".nav-menu a");
            var  i = 0
            for(i ; i < navItems.length; i++){
                navItems[i].style.color="#fff";
            }
        }
    }

    //Media screen
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    //burger menu click function
    function burger(){
        const burgerMenu = document.querySelector('#burger-icon');
        const navMenu = document.querySelector('.nav-menu');
        if(burgerMenu.className === 'fas fa-bars'){
        burgerMenu.classList.remove('fa-bars');
        burgerMenu.classList.add('fa-times');
        burgerMenu.style.cssText="color:white;transition:all .7s ease";
        navMenu.style.cssText="transform: translate(0%,0%);; transition:all .7s ease";    
        }else{
            burgerMenu.classList.add('fa-bars');
            burgerMenu.classList.remove('fa-times');
            navMenu.style.cssText="transform: translate(0%,-100%); transition:all .7s ease";
            burgerMenu.style.cssText="color:#6b6beb;"; 
        }
    }

     //check if on mobile then hide nav menu
     function hideMenu(){
        const burgerMenu = document.querySelector('#burger-icon');
        const navMenu = document.querySelector('.nav-menu');
        if(isMobile){
         navMenu.style.cssText="pointer-events:none; opacity:0";
         burgerMenu.classList.add('fa-bars');
         burgerMenu.classList.remove('fa-times');
         burgerMenu.style.cssText="color:#6b6beb;"; 
        }
    }

    return(
        <div className="navigation">
            
            <div className="logo"><img className="profile-img" src={myProfileImage} alt=""/><img src={logo} alt=""/><span><Link to="/"><h1>TSHILIDZI RAMBUDA</h1></Link></span></div>
            <span className="burger-menu" onClick={burger}><i className="fas fa-bars" id="burger-icon"></i></span>
            <div className='nav-menu'>
                <Link to="/" onClick={hideMenu}>Home</Link>
                <Link to='/profile' onClick={hideMenu}>My Profile</Link>
                <Link to='/skills' onClick={hideMenu}>My Skills</Link>
                <Link to='/project' onClick={hideMenu}>My Project</Link>
                <Link to='/contact' onClick={hideMenu}>Contact</Link>
            </div>
        </div>
    )
}
export default Navigation;


