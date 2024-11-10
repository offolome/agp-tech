import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewClient = () => {
  return (
    <div className="container">
        <Link to="/addClient">
          <span className="btn-client">
            Nouveau client
            <BsFillPersonPlusFill size={20} />
          </span>
        </Link>
    </div>
  );
};

export default NewClient;
