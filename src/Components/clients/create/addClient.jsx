import React from "react";

const AddClient = () => {
  return (
    <div className="container">
      <h1>Ajouter un nouveau client</h1>
      <form action="">
        <div className="fullname">
          <label htmlFor="Fullname">Nom du client</label>
          <input
            type="text"
            name="fullname"
            className="fullname"
            placeholder="Nom complet du client"
          />
        </div>
        <div className="residence">
          <label htmlFor="Residence">Lieu de résidence</label>
          <input
            type="text"
            name="residence"
            className="residence"
            placeholder="Où habitez-vous?"
          />
        </div>
        <div className="dateFirst">
          <label htmlFor="DateFirst">Date de reception</label>
          <input type="date" name="dateFirst" className="dateFirst" placeholder="Date de reception" />
        </div>
        <div className="telephone">
          <label htmlFor="Telephone">N°Téléphone</label>
          <input type="text" name="telephone" className="telephone" placeholder="Numéro de téléphone du client" />
        </div>
      </form>
    </div>
  );
};

export default AddClient;
