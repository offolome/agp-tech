import React from "react";
import { FaEdit } from "react-icons/fa";
import updateClient from "./updateClient.css";
import { useNavigate } from "react-router-dom";

const UpdateClient = ({to}) => {

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

export default UpdateClient;