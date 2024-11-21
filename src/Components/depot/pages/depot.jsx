import React from "react";
import DepotList from "./depotList";
import NewDepot from "../buttons/newDepot";

const Depot = () => {
    return(
        <div className="container">
            <h1>DEPOT DE VETEMENTS</h1>
            {/* Bouton d'ajout */}
            <div className="btn-add">
                <NewDepot to="/depot/addDepot" />
            </div>

            <br /> <br />

            {/* Liste des dépôts */}
            <div className="table-depot">
                <DepotList />
            </div>
        </div>
    );
}

export default Depot;