import React from "react";
import editClient from "./editClient.css";

const EditClient = () => {
    return (
        <div className="body">
            <div className="form">
                <h1>Mettre à jour un client</h1>
                <form action="">
                    <div className="fullname">
                        <input
                            type="text"
                            name="fullname"
                            className="fullname"
                            placeholder="Nom complet du client"
                        />
                    </div>
                    <div className="residence">
                        <input
                            type="text"
                            name="residence"
                            className="residence"
                            placeholder="Où habitez-vous?"
                        />
                    </div>
                    <div className="dateFirst">
                        <input type="date" name="dateFirst" className="dateFirst" placeholder="Date de reception" />
                    </div>
                    <div className="telephone">
                        <input type="text" name="telephone" className="telephone" placeholder="Numéro de téléphone du client" />
                    </div>

                    <br /><br />

                    <button className="btn-addClient">
                        Modifier
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditClient;