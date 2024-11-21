import React from "react";
import addDepot from "./addDepot.css";
import { Link } from "react-router-dom";

const AddDepot = () => {
    return (
        <>
            <div className="form">
                <h1>Enregistrer un dépôt</h1>
                <form action="">
                    <select name="" id=""></select>
                    <br /><br />
                    <div className="nature">
                        <input
                            type="text"
                            name="nature"
                            className="nature"
                            placeholder="Vêtements à laver"
                        />
                    </div>
                    <div className="dateDepot">
                        <input type="date" name="dateDepot" className="dateDepot" placeholder="Date de lavage" />
                    </div>

                    <br /><br />

                    <button className="btn-addDepot">
                        Ajouter
                    </button>

                    <br /><br />

                    <Link to="/depot" className="lien-depot">
                        <span>retour</span>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default AddDepot;