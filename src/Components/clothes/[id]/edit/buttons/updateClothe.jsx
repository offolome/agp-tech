import React from "react";
import updateClothe from "./updateClothe.css";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UpdateClothe = ({to}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }
    return (
        <span>
            <FaEdit onClick={handleClick} className="update" size={30} />
        </span>
    );    
}

export default UpdateClothe;