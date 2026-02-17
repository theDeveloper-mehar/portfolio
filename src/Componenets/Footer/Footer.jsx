import React from "react";
import "./Footer.css";
import logo from "../../assets/mehar2_transparent.png"; 
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo}></img>
                    <p>Aspiring Front-End Developer eager to build impactful web experiences.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src ={user_icon} ></img>
                        <input type="email" placeholder="Enter your email"></input>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2025 Koushik Pulavarthi. All Rights Reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;