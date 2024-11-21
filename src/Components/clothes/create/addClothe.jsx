import React from "react";
import addClothe from "./addClothe.css";
import { Link } from "react-router-dom";

const AddClothe = () => {
    return (
        <>
            <div className="form">
                <h1>Ajouter un vêtement</h1>
                <form action="">
                    <div className="description">
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Description"
                            id="description"
                            rows={15}
                            cols={65}
                        >
                        </textarea>
                    </div>
                    <div className="nbClothes">
                        <input
                            type="text"
                            name="nbClothes"
                            placeholder="Nombres de vêtements"
                        />
                    </div>
                    <div className="dateClothes">
                        <input type="date" name="dateClothes" />
                    </div>

                    <br /><br />

                    <button className="btn-addClothe">
                        Ajouter
                    </button>

                    <br /><br />

                    <Link to="/clothes" className="lien-clothes">
                        <span>retour</span>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default AddClothe;