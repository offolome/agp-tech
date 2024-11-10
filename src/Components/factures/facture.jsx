import React from "react";

const Facture = ({facture, client, clothe}) => {
    const {amount, dateFacture, status} = facture;
    const fullname = client;
    const nbClothes = clothe;
    return(
        <div className="container">
            <h3>Factures</h3>
            <div>{fullname}</div>
            <div>{nbClothes}</div>
            <div>{amount}</div>
            <div>{dateFacture}</div>
            <div>{status}</div>
        </div>
    );
}

export default Facture;