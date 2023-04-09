import React from "react";
import taxi from "../images/Taxi.jpg"
import phone2 from "../images/phone2.png"

export default function (){
    return (
        <section id="ImageList">
            <div className="top"> 
                <h1>Compatible avec les appareils mobiles</h1>
                <img src={phone2} alt="" />
             </div>
            <div className="bottom">
                <img src={taxi} alt="" />
                <h1>Télécharger notre application</h1>
                
            </div>
        </section>
    )
}