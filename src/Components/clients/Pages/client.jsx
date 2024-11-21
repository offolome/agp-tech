import React from "react";
import client from "../client.css";
import NewClient from "../Buttons/newClient";
import ClientList from "./clientList";

const Client = () => {
  return (
    <>
      <div className="container-client">
        <h1>CLIENTS</h1>
        <div className="btn-add">
          {/* Bouton nouveau client */}
          <NewClient to="addClient" />
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
