import React from "react";

const Message = ({message}) => {
    const {libelle, dateMess} = message;
    return(
        <div className="container">
            <h3>Message</h3>
            <div>{libelle}</div>
            <div>{dateMess}</div>
        </div>
    );
}

export default Message;