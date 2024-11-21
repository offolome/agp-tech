import React from "react";
import newClient from "./newClient.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const NewClient = ({ to }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Navigue vers la page spécifiée dans "to"
  }

  return (
    <span className="btn-icon" onClick={handleClick}>
      Nouveau client
      <BsFillPersonPlusFill size={25} />
    </span>
  );
};

export default NewClient;
