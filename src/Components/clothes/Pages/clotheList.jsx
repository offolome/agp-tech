import React from "react";
import Clothes from "../../../Data/clothes";
import UpdateClothe from "../[id]/edit/buttons/updateClothe";
import DeleteClothe from "../[id]/delete/deleteClothe";

const ClotheList = () => {
    return (
        <div className="body-clothe">
            <div className="table">
                <table className="table-clothe">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Description</th>
                            <th>Nombres de vêtements</th>
                            <th>Date de vêtements</th>
                            <th>Editer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Clothes.map((clothe, index) => (
                                <tr key={clothe.id}>
                                    <td>{index + 1}</td>
                                    <td>{clothe.description}</td>
                                    <td>{clothe.nbClothes}</td>
                                    <td>{clothe.dateClothes}</td>
                                    <td className="icon">
                                        <UpdateClothe to="editClothe" />
                                        <DeleteClothe />
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

export default ClotheList;