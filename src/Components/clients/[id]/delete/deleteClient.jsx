import React from "react";
import { MdDelete } from "react-icons/md";
import deleteClient from "./deleteClient.css";

const DeleteClient = () => {
    return (
        <span>
            <MdDelete className="delete" size={30} />
        </span>
    );
}

export default DeleteClient;