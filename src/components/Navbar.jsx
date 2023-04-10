import React from 'react';
import logo from "../images/logo.png"

export default function () {
  return (
    <nav>
      <img src={logo} alt=""   />
     <ul>
        <li>  <a href="#Home">Accueil</a></li>
        <li>  <a href="#Downloads">Téléchargement</a></li>
        <li>  <a href="#HowItWorks">Comment il travaille ?</a></li>
        <li>  <a href="#About">Pourquoi nous choisir ?</a></li>
        <li>  <a href="#contact">Contactez nous</a> </li>

      </ul>
    </nav>
  )

}