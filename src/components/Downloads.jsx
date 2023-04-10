import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import app_store from "../images/app_store.svg"
import Google_Play from "../images/Google_Play.png"
import { useEffect } from "react";
import mobile from "../images/mobile.png"
export default function () {
    const [client, setClient] = useState("client")
    useEffect(()=>{
if (client=="client")
{document.querySelector("#btn-driver").classList.remove("Active");
document.querySelector("#btn-client").classList.add("Active");
}
else {
    document.querySelector("#btn-client").classList.remove("Active");
    document.querySelector("#btn-driver").classList.add("Active");
}
    },[client])
   
    return (
        <section id="Downloads">
            <div className="header"  >
                <div className="h2" data-aos="fade-down"
                    data-aos-duration="1500">Téléchargement </div>
            </div>
            <div className="body">
                <div className="container">
                    <button id="btn-client" data-aos="fade-right"
     data-aos-duration="1500"  onClick={() => setClient("client")}>Client</button>
                    <button data-aos="fade-left"
     data-aos-duration="1500" id="btn-driver" onClick={() => setClient("driver")}>Driver</button>
                </div>
                <div className="show">
                    <div className="left" data-aos="fade-right"
     data-aos-duration="1500">
                           <h1>
                            Télechargez Application {(client=="client")? "Client" : "Chauffeur" }
                            </h1> 
                            <h2>
                                Conditions générales
                            </h2>
                            <p>{(client=="client")?"Le Client est responsable de fournir uniquement des informations exactes et complètes et de les maintenir à jour tout le temps"+
"Le Client informera CATCH immédiatement de tout changement relatif au mode de paiement choisi par le Client qui pourrait nuire à la capacité de facturer le Client conformément au présent Accord." : 
"Les présentes Conditions Générales énoncent les principaux termes et conditions s'appliquant et régissant l'utilisation des Services CATCH. Afin de fournir des services de transport via l'utilisation de la plate-forme CATCH, vous devez accepter les conditions générales énoncées ci-dessous."} </p>
                    <div className="links">
                       <img src={Google_Play} alt="" />
                       <img src={app_store} alt="" />
                    </div>
                    </div>
                    <div className="right" data-aos="fade-left"
     data-aos-duration="1500">
                        <img src={mobile} alt="" />
                    </div>
                </div>


            </div>
        </section>
    )
}