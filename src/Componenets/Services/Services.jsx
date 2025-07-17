import React from 'react';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow from '../../assets/arrow_icon.svg';

import './Services.css';    
 const Services = () => {
    return (
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src = {theme}></img>
            </div>
            <div className="service-container">
                {Services_Data.map((service,index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore"><p>
                            Read More</p>
                            <img src = {arrow}></img></div>
                    </div>
                })}
            </div>
        </div>
    ) 
}
export default Services;