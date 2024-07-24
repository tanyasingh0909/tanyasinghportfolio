// src/ContactForm.js
import React, { useState } from 'react';
import './Contact.css';
import { ImLocation2 } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mgvwooyn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('Message Sent Successfully!');
    } else {
      setStatus('An error occurred, Please try again');
    }
  };




  return (
<section id='Contact'>  
<div>
          <div className="contact-form-container">
       
          <div class='box-cont'> <div class='line-cont'></div><h1 class='cont-h '>Connect With Me</h1>

          <div class='bada-box'>
       <div class='new'>

        <div class='unique'>

        <div class='newcomp-1'>
        <div class='location-icon'><ImLocation2/></div>
        <div class='chota-div'>
            <div class='earth'>Planet Earth</div>
            <div class='earth-icon'><FaEarthAmericas/></div>
        </div>
        </div>

        <div class='newcomp2'>
            <div class='mail-logo'><IoMailUnreadOutline/></div>
            <div class='mail'>tanyasingh090904@gmail.com</div>

        </div>


        <div class='newcomp3'>
          <div class='discord-div'><a href='https://discordapp.com/users/tanya0978/' class='discord-b'> <div class='discord'><FaDiscord/></div> </a></div>
          <div class='instagram-div'><a href=' https://www.instagram.com/tanya_singh_0909?igsh=YzljYTk1ODg3Zg==' class='instagram-b'><div class='instagram'><FaInstagram/></div></a></div> 
          <div class='telegram-div'><a href='https://t.me/ciphergeek0909' class='telegram-b'><div class='telegram'><BsTelegram/></div></a></div>
          <div class='whatsapp-div'> <a href='https://wa.me/9119944763' class='whatsapp-b'><div class='whatsapp'><IoLogoWhatsapp/></div></a></div>
          <div class='linkedin-div' ><a href='https://www.linkedin.com/in/tanya-singh-a4289328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' class='linkedin-b'><div class='linkedin'>< FaLinkedin /></div> </a></div>
          
          
          <div class='github-div'> <a href='https://github.com/tanyasingh0909' class='github-b'><div class='github'><FaGithub/></div></a></div>
        </div>
        </div>
        
      
        
       </div>

<form className="contact-form" onSubmit={handleSubmit}>
    <div class='compon'>
        <div class='line-heading'></div>
    <div class='heading-1'>Contact Me</div>
    </div>

<div className="form-group">
<label class='name' htmlFor="name">Name:</label>
<input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
/>
</div>
<div className="form-group">
<label class='email' htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
/>
</div>
<div className="form-group">
<label class='subject' htmlFor="subject">Subject:</label>
<input
  type="text"
  id="subject"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
/>
</div>
<div className="form-group">
<label class='message' htmlFor="message">Message:</label>
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>
</div>
<button class='send-btn' type="submit">Send</button>
{status && <p className="status">{status}</p>}
</form>
          </div>
        

          
          </div>


   
   
    </div>

    


    </div>
</section>
   
  
  );
};

export default ContactForm;
