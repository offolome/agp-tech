import React from "react";

const CategoryClothe = ({categorie}) => {
    const {name, price} = categorie;
    return(
        <div className="container">
            <h3>Catégorie de vêtements</h3>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    );
}

export default CategoryClothe;