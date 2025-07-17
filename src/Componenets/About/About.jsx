import React from 'react';
import './About.css';
import theme_pattern from '../../Assets/theme_pattern.svg';
import profile_pic from '../../Assets/p1.jpg'; 
const About=()=>
{

  return(
    <div id='about' className = 'about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src = {theme_pattern}></img>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_pic}></img>
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
I’m a passionate Front-End Developer with a strong foundation in HTML, CSS, and JavaScript, and hands-on experience using React to build responsive and interactive web interfaces. I’ve also explored Java for object-oriented programming and Solidity for developing smart contracts on the Ethereum blockchain.</p>

<p>As a quick learner and technology enthusiast, I actively work on personal projects to improve my skills and stay up to date with modern development trends. I’m currently seeking internship or entry-level opportunities where I can contribute, grow, and continue building impactful web applications</p>
              <p>My passion for fron tend development is not only for</p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{width:"50%"}}></hr>
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{width:"70%"}}></hr>
              </div>
              <div className="about-skill">
                <p>Java</p>
                <hr style={{width:"80%"}}></hr>
              </div>
              <div className="about-skill">
                <p>Solidity</p>
                <hr style={{width:"50%"}}></hr>
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{width:"60%"}}></hr>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>Personal Projects</p>
          </div>
           <hr/>
          <div className="about-achievement">
            <h1>1+</h1>
            <p>years of Learning</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>1</h1>
            <p>Open Source Contributions</p>
          </div>
        </div>
    </div>
  )
}

export default About;