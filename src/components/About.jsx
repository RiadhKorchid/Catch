import React from "react";
import phone from "../images/phone.svg"
import pay from "../images/pay.svg"
import car from "../images/car.svg"

export default function () {
    return (
        <section id="About">
            <div className="header" >
                <div className="h2" data-aos="fade-down"
                    data-aos-duration="1500">Pourquoi nous choisir? </div>
            </div>
            <div className="body">
                <div className="container"
                    data-aos="fade-up"
                    data-aos-duration="1500">

                    <img src={phone} alt="" />
                    <div>
                        <h1>Facile à utiliser</h1>
                        <p>Vous pouvez aller n'importe où aussi vite que possible.</p>
                    </div>
                </div>
                <div className="container" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src={pay} alt="" />
                    <div>
                        <h1>Meilleur prix</h1>
                        <p>Notre objectif est d'offrir les meilleurs tarifs de transport dans chaque ville. Voir par vous-même!</p>
                    </div>
                </div>
                <div className="container" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src={car} alt="" />
                    <div>
                        <h1>Faire un tour</h1>
                        <p>Caption vous fournit une connexion en quelques minutes.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}