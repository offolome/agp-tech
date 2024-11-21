import React from "react";
import newFacture from "./newFacture.css";
import { HiDocumentText } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


const NewFacture = ({to}) => {
    // Lien de navigation vers addFacture
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }
    return (
        <span className="btn-factures" onClick={handleClick}>
            Nouvelle facture
            <HiDocumentText size={25} />
        </span>
    );
}

export default NewFacture;