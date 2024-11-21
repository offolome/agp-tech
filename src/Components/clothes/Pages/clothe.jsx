import React from "react";
import ClotheList from "./clotheList";
import clothe from "../clothe.css";
import NewClothe from "../Buttons/newClothe";

const Clothe = () => {
    return(
        <div className="container">
            <h1>VETEMENTS DEPOSES</h1>
            <div className="newClothe">
                {/* Bouton nouveau vêtement */}
                <NewClothe to="addClothe" />
            </div>
            <div className="list-clothe">
                {/* Liste des vêtements */}
                <ClotheList />
            </div>
        </div>
    );
}

export default Clothe;