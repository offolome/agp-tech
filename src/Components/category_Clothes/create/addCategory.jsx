import React from "react";
import addCategory from "./addCategory.css";
import { Link } from "react-router-dom";

const AddCategory = () => {
    return (
        <>
            <div className="form">
                <h1>Ajouter une Catégorie</h1>
                <form action="">
                    <div className="gender">
                        <input
                            type="text"
                            name="gender"
                            placeholder="Nature de l'article"
                        />
                    </div>
                    <div className="price">
                        <input type="text" name="price" placeholder="Prix" />
                    </div>

                    <br /><br />

                    <button className="btn-addCategory">
                        Ajouter
                    </button>

                    <br /><br />

                    <Link to="/category_Clothes" className="lien-category">
                        <span>retour</span>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default AddCategory;