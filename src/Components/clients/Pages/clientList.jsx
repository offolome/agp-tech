import React from "react";
import Clients from "../../../Data/clients";

const ClientList = () => {
    return(
        <>
            <div className="table">
                <table className="table-client">
                    <thead>
                        <tr>
                            <th>ID</th>
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
                                        <td>
                                            
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