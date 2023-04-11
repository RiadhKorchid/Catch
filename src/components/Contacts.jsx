import React from "react";
import{BsFillTelephoneFill} from'react-icons/bs';
import {MdEmail}from "react-icons/md"
import{MdLocationOn}from "react-icons/md"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert , Snackbar } from "@mui/material";
import { useState } from "react";
export default function () {
  const [succes,setSucces]= useState(false) 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lrzlsnp', 'template_4vw7rg9', form.current, '9NZpgePs2LVkQKYJe')
      .then((result) => {
          setSucces(true)  
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
          setSucces(false)
      });
  };

    return (<section className="contact" id="contact" >
        <div className="header" >
            <div className="h2" data-aos="fade-down"  data-aos-duration ="1500"><div></div> Contactez nous <div></div></div>
        </div>
<div className="contact-body">
        <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="contact-left" data-aos="fade-right" data-aos-duration="700" >
            <div className="name-surname"> 
                <input type="text" name="from_name" placeholder="Enter name..." />
                <input type="text" name="subject" placeholder="Enter object..." />
                
            </div>
            <input type="email" name="email" placeholder="Enter email..." />
            <textarea name="message"  rows="6" placeholder="Enter message..."></textarea>
            <input type="submit" value="Send Message" />
        </form>
        <div className="contact-right" data-aos="fade-left" data-aos-duration="700"  >
            <BsFillTelephoneFill className="icon"/> <p>+216 88 888 888</p>
            <MdEmail className="icon"/> <p>FakhriEssid@gmail.com</p>
            <MdLocationOn className="icon"/><p>Midoun, Djerba Médenine Tunisie</p>
        </div>
</div>
<Snackbar open={succes} autoHideDuration={6000} onClose={()=>setSucces(false)} >
                <Alert variant="filled" severity="success"  sx={{ width: '100%' }}>
                  message envoyée avec succès
                </Alert>
              </Snackbar>
    </section>
    )
}