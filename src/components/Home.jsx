import React from "react";
import home from "../images/fondo.jpg"
export default function (){
    return (
        <section id="Home" data-aos="zoom-on"
        data-aos-duration="1500">
            <img src={home} alt=""  />
            <h1   data-aos="fade-up"
     data-aos-duration="3000">Le moyen le plus rapide et le plus économique de se déplacer.</h1>
        </section>
    )
}