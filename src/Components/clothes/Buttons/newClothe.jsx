import React from "react";
import { PiShirtFoldedFill } from "react-icons/pi";
import newClothe from "./newClothe.css";
import { useNavigate } from "react-router-dom";

const NewClothe = ({to}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to); // Navigue vers la page spécifiée dans "to"
    }
    return (
        <span className="btn-clothe" onClick={handleClick}>
            Nouveau vêtement
            <PiShirtFoldedFill size={25} />
        </span>
    );
}

export default NewClothe;