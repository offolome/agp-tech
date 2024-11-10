import React from "react";

const Depot = ({depot, clothe, client}) => {
    const {dateDepot} = depot;
    const {description, nbClothes} = clothe;
    const {fullname} = client;
    return(
        <div className="container">
            <h3>Dépôt de vêtements</h3>
            <div>{fullname}</div>
            <div>{description}</div>
            <div>{nbClothes}</div>
            <div>{dateDepot}</div>
        </div>
    );
}

export default Depot;