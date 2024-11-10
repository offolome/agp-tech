import React from "react";
import ClientList from "./clientList";
import client from "../client.css";
import NewClient from "../Buttons/newClient";

const Client = () => {
  return (
    <>
      <div className="container">
        <h1>Page clients</h1>
        <div className="btn-add">
          {/* Bouton nouveau client */}
          <NewClient />
        </div>
        <div className="table-client">
          {/* Affichage de la liste des clients dans un tableau */}
          <ClientList />
        </div>
      </div>
    </>
  );
};

export default Client;
