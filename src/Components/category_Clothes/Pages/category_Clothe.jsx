import React from "react";
import CategoryClotheList from "./category_ClotheList";
import NewCategory from "../Buttons/newCategory";


const CategoryClothe = () => {
    return (
        <div className="container">
            <h1>CATEGORIE DE VETEMENTS</h1>
            <div className="newCategory">
                {/* Nouvelle catégorie */}
                <NewCategory to="addCategory" />
            </div>
            {/* Liste des catégories */}
            <div className="list-categories">
                <CategoryClotheList />
            </div>
        </div>
    );
}

export default CategoryClothe;