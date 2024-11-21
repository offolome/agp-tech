import React from "react";
import category_Clothe from "../category_Clothe.css";
import Categories_clothe from "../../../Data/categories_clothe";
import UpdateCategory from "../[id]/edit/buttons/updateCategory";
import DeleteCategory from "../[id]/delete/deleteCategory";

const CategoryClotheList = () => {
    return (
        <div className="body-categorie">
            <div className="table">
                <table className="table-categorie">
                    <thead>
                        <tr>
                            <td>N°</td>
                            <td>Genre</td>
                            <td>Prix</td>
                            <td>Editer</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Categories_clothe.map((categorie, index) => (
                                <tr key={categorie.id}>
                                    <td>{index + 1}</td>
                                    <td>{categorie.gender}</td>
                                    <td>{categorie.price}</td>
                                    <td className="icon">
                                        <UpdateCategory to="editCategory" />
                                        <DeleteCategory />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryClotheList;