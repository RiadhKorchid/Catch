import React from "react";
import HowItWorks from "../images/HowItWorks.png"
export default function (){
    return (
        <section id="HowItWorks">
            <div className="header" >
                <div className="h2">Comment il travaille? </div>
            </div>
            <div className="body">
            <div className="left">
                <h1>Obtenez un tour en quelques minutes!</h1>
                <p>Définissez votre destination, demandez un trajet, rencontrez votre chauffeur, profitez du trajet.</p>
            </div>
            <img src={HowItWorks} alt="" />

            </div>
        </section>
    )
}