import React from "react";
import newCategory from "./newCategory.css";
import { useNavigate } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";


const NewCategory = ({to}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <span className="btn-newCategory" onClick={handleClick}>
            Nouvelle catégorie
            <TbCategoryPlus size={25} />
        </span>
    );
}

export default NewCategory;