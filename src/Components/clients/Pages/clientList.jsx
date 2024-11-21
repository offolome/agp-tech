import React from "react";
import Clients from "../../../Data/clients";
import UpdateClient from "../[id]/edit/buttons/updateClient";
import DeleteClient from "../[id]/delete/deleteClient";

const ClientList = () => {
    return (
        <>
            <div className="table">
                <table className="table-client">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nom du client</th>
                            <th>Residence</th>
                            <th>Date de reception</th>
                            <th>N°Téléphone</th>
                            <th>Editer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Clients.map((client, index) => (
                                <tr key={client.id}>
                                    <td>{index + 1}</td>
                                    <td>{client.fullname}</td>
                                    <td>{client.residence}</td>
                                    <td>{client.dateFirst}</td>
                                    <td>{client.telephone}</td>
                                    <td className="icon">
                                        <UpdateClient to="editClient" />
                                        <DeleteClient />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ClientList;