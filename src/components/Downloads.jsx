import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import Google_Play from "../images/Google_Play.png"
export default function () {
    const [client, setClient] = useState("client")
    return (
        <section id="Downloads">
            <div className="header" >
                <div className="h2">Téléchargement </div>
            </div>
            <div className="body">
                <div className="container">
                    <button onClick={() => setClient("client")}>Client</button>
                    <button onClick={() => setClient("driver")}>Driver</button>
                </div>
                <div className="show">
                    {(client == "client") ?
                        <>
                            <h1>Télecharger Par Google Play :</h1>
                            <h2>Link: </h2>
                            <h1>Télecharger Par App Store :</h1>
                            <h2>Link:</h2>
                        </>
                        :
                        <>
                            <h1>Télecharger Avec :</h1>
                            <h2>Link:</h2>
                            <h1>Télecharger Par App Store :</h1>
                            <h2>Link:</h2>
                        </>}
                </div>


            </div>
        </section>
    )
}