import React from "react";
import { MdDelete } from "react-icons/md";
import deleteCategory from "./deleteCategory.css";

const DeleteCategory = () => {
    return (
        <span>
            <MdDelete className="delete" size={30} />
        </span>
    );
}

export default DeleteCategory;