import React from 'react';
import './Mywork.css';
import theme from '../../assets/theme_pattern.svg';
import myworkdata from '../../assets/mywork_data';
import Arrow from '../../assets/arrow_icon.svg';
const Mywork = () => {
    return(<div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} ></img>
        </div>
        <div className="mywork-container">
            {myworkdata.map((work,index)=>{
                return<img key={index} src ={work.w_img}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={Arrow} alt="arrow icon" />
        </div>
    </div>)
}
export default Mywork;