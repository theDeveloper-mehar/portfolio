import React from 'react'
import './Contact.css';
import theme from '../../Assets/theme_pattern.svg';
import mail from '../../Assets/mail_icon.svg'
import location from '../../Assets/location_icon.svg'
import call from '../../Assets/call_icon.svg'

const Contact = () => {
    return(
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme}></img>
            </div>
            <div className="contact-section">
                <div className="contact-left"><h1>Lets's talk</h1>
                <p>I m currently availble to take projects</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail} alt ="mail icon" />
                    <p>koushipulavarthi@gmail.com</p>
                    </div>
                    <div className="contact-detail"> 
                    <img src={location} alt ="location icon" />
                    <p>+919390364536</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call} alt ="call icon" />
                    <p>Andhra pradesh,India</p>
                    </div>
                </div>
                </div>
                {/* <form action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-right">
     <input type="hidden" name="access_key" value="
Hello,

Thank you for using Web3Forms.

Your Public Access Key is:

e383939e-6080-4d52-9c35-7ae62ae46679" />
                    <label htmlFor="">Your Name</label>
                    <input type='text' placeholder='Enter Your name' name = 'name'/>
                    <label htmlFor=""> Your Email</label>
                    <input type='email' placeholder='Enter Your email' name = 'email'/>
                    <label htmlFor="">Write Your Message</label>
                    <textarea name="message"  rows="8" placeholder='Enter Your message'></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form> */}
                <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-right"
>
  <input type="hidden" name="access_key" value="e383939e-6080-4d52-9c35-7ae62ae46679" />

  <label htmlFor="">Your Name</label>
  <input type="text" placeholder="Enter Your name" name="name" required />

  <label htmlFor="">Your Email</label>
  <input type="email" placeholder="Enter Your email" name="email" required />

  <label htmlFor="">Write Your Message</label>
  <textarea name="message" rows="8" placeholder="Enter Your message" required></textarea>

  <button type="submit" className="contact-submit">Submit Now</button>
</form>

            </div>
             </div>
    )
}
export default Contact;