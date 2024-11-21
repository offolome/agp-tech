import React from "react";
import Factures from "../../../Data/factures";

const FactureList = () => {
    return (
        <>
            <div className="table">
                <table className="table-facture">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nom du client</th>
                            <th>Nombre de vêtements</th>
                            <th>Montant</th>
                            <th>Date de facturation</th>
                            <th>Statut</th>
                            <th>Editer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Factures.map((invoice, index) => (
                                <tr key={invoice.id}>
                                    <td>{index + 1}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{invoice.amount}</td>
                                    <td>{invoice.dateFacture}</td>
                                    <td>{invoice.status}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FactureList;