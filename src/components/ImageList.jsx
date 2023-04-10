import React from "react";
import taxi from "../images/Taxi.jpg"
import phone2 from "../images/phone2.png"

export default function (){
    return (
        <section id="ImageList">
            <div className="top"> 
                <h1 data-aos="fade-right"
     data-aos-duration="1500">Compatible avec les appareils mobiles</h1>
                <img src={phone2} alt="" data-aos="fade-left"
     data-aos-duration="1500" />
             </div>
            <div className="bottom">
                <img src={taxi} alt="" data-aos="fade-right"
     data-aos-duration="1500"/>
                <h1 data-aos="fade-left"
     data-aos-duration="1500">Télécharger notre application</h1>
                
            </div>
        </section>
    )
}