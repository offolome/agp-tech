import React from "react";
import addClient from "./addClient.css";
import { Link } from "react-router-dom";

const AddClient = () => {
  return (
    <>
      <div className="form">
        <h1>Ajouter un nouveau client</h1>
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

          <button className="btn-addclient">
            Ajouter
          </button>

            <br /><br />

            <Link to="/clients" className="lien-client">
              <span>retour</span>
            </Link>
        </form>
      </div>
    </>
  );
};

export default AddClient;
