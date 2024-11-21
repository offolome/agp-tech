import React from "react";
import newDepot from "./newDepot.css";
import { TiDocumentText } from "react-icons/ti";
import { useNavigate } from "react-router-dom";


const NewDepot = ({to}) => {
    // Lien vers la page addDepot
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to); // Navigue vers la page spécifiée dans "to"
    }
    return (
        <span className="icon-depot" onClick={handleClick}>
            Nouveau depot
            <TiDocumentText size={25} />
        </span>
    );
}

export default NewDepot;