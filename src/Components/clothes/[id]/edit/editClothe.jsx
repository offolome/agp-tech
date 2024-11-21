import React from "react";
import editClothe from "./editClothe.css";

const EditClothe = () => {
    return (
        <div className="body-edit">
            <div className="form">
                <h1>Mettre à jour un client</h1>
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

                    <button className="btn-editClothe">
                        Modifier
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditClothe;