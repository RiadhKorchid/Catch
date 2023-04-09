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
      <div className="why_container">
        <div className="box">
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
        <div className="box">
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
        <div className="box">
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
  </footer>
       
    )
}