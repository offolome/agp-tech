import React from "react";

const Planning = ({planning, client, clothe}) => {
    const datePlan = planning;
    const fullname = client;
    const nbClothes = clothe;
    return(
        <div className="container">
            <h3>Rendez-vous</h3>
            <div>{fullname}</div>
            <div>{nbClothes}</div>
            <div>{datePlan}</div>
        </div>
    );
}

export default Planning;