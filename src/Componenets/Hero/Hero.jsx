import React from 'react';
import './Hero.css'
import profile_img from '../../assets/p1.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero=()=>
{

  return(
    <div id = 'home'className="hero">
      <img src={profile_img} alt="Profile" className="profile-img" />
      <h1><span>I'm Mehar ,</span>Web 3.0 developer based in India</h1>
      <p>I m intreseted in Block Chain Technology. I build this website Using React</p>
      <div className='hero-action'>
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero;