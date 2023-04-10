import React from "react";
import black from "../images/repairing-service-black.png"
import black2 from "../images/delivery-man-black.png"
import black3 from "../images/shield-black.png"
import white3 from "../images/shield-white.png"
import white2 from "../images/delivery-man-white.png"
import white from "../images/repairing-service-white.png"
export default function (){
    return (
      <footer>
       <div className="why_section layout_padding">
    <div className="container">
      <div className="why_container"  >
        <div className="box"  data-aos="fade-up"
                    data-aos-duration="1500">
          <div className="img-box">
            <img src={white2} alt="" className="img-1"/>
            <img src={black2} alt="" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              Best Drivers
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
        <div className="box"  data-aos="fade-up"
                    data-aos-duration="1500">
          <div className="img-box">
            <img src={white3} alt="" className="img-1"/>
            <img src={black3} alt="" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              Safe and Secure
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
        <div className="box"  data-aos="fade-up"
                    data-aos-duration="1500">
          <div className="img-box">
            <img src={white} alt="" className="img-1"/>
            <img src={black} alt="" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              24x7 support
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p  data-aos="fade-down"
                    data-aos-duration="1500">CATCH TECHNOLOGY S.A.R.L ci-aprés CATCH, société Tunisienne à responsabilité limité enregistrée sous le numéro identifiant unique RNE 1704625A , sise à Midoun, Djerba Médenine Tunisie;
CATCH Business - un service destiné à un client professionnel pour la gestion et le paiement de l'utilisation des services CATCH par les Utilisateurs
Services CATCH - plateforme en ligne opérée par CATCH ou ses sociétés affiliées ou partenaires (ci-après Plateforme CATCH) ainsi que les services proposés sur cette dernière conformément aux conditions applicables à l'utilisation des services</p>
  <p>Copyrights © 2023 Catch All rights reserved</p>
  </footer>
       
    )
}