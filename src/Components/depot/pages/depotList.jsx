import React from "react";
import Depots from "../../../Data/depots";

const DepotList = () => {
    return (
        <div className="table">
            <table className="table-depot">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nom du client</th>
                        <th>Nature des articles</th>
                        <th>Date de lavage</th>
                        <th>Editer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Depots.map((dep, index) => (
                            <tr key={dep.id}>
                                <td>{index + 1}</td>
                                <td></td>
                                <td></td>
                                <td>{dep.dateDepot}</td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DepotList;