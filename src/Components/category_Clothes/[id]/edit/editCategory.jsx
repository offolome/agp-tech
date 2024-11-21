import React from "react";
import editCategory from "./editCategory.css";

const EditCategory = () => {
    return (
        <div className="body-category">
            <div className="form">
                <h1>Mettre à jour un vêtement</h1>
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

                    <button className="btn-editCategory">
                       Modifier
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditCategory;