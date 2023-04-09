import React from 'react';
import logo from "../images/logoc.png"

export default function () {
  return (
    <nav >
      <img src={logo} alt="" />
      <ul>
        <li>  <a href="#Home">Accueil</a></li>
        <li>  <a href="">Téléchargement</a></li>
        <li>  <a href="#HowItWorks">Comment il travaille ?</a></li>
        <li>  <a href="">Pourquoi nous choisir ?</a></li>
        <li>  <a href="">A propos</a> </li>

      </ul>
    </nav>
  )

}