import React from "react";
import deleteClothe from "./deleteClothe.css";
import { MdDelete } from "react-icons/md";


const DeleteClothe = () => {
    return (
        <span>
            <MdDelete className="delete" size={30} />
        </span>
    );
}

export default DeleteClothe;