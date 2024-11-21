import React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import updateCategory from "./updateCategory.css";

const UpdateCategory = ({to}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }
    return (
        <span>
            <FaEdit className="update" size={30} onClick={handleClick} />
        </span>
    );
}

export default UpdateCategory;