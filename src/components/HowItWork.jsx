import React from "react";
import HowItWorks from "../images/HowItWorks.png"
export default function (){
    return (
        <section id="HowItWorks">
            <div className="header" >
                <div className="h2" data-aos="fade-down"
     data-aos-duration="1500">Comment il travaille? </div>
            </div>
            <div className="body">
            <div className="left" data-aos="fade-right"
     data-aos-duration="1500">
                <h1>Obtenez un tour en quelques minutes!</h1>
                <p>Définissez votre destination, demandez un trajet, rencontrez votre chauffeur, profitez du trajet.</p>
            </div>
            <img src={HowItWorks} alt="" data-aos="fade-left"
     data-aos-duration="1500" />

            </div>
        </section>
    )
}