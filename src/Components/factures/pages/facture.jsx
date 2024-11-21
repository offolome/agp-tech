import React from "react";
import FactureList from "./factureList";
import NewFacture from "../buttons/newFacture";

const Facture = () => {
    return(
        <div className="container">
            <h1>FACTURES</h1>

            {/* Liste des Factures */}
            <div className="list-factures">
                <FactureList />
            </div>
        </div>
    );
}

export default Facture;