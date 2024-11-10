import React from "react";

const User = ({user}) => {
    const {lastName, firstName, username, email, residenceUser, contact} = user;
    return(
        <div className="container">
            <h3>Utilisateurs</h3>
            <div>{lastName}</div>
            <div>{firstName}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{residenceUser}</div>
            <div>{contact}</div>
        </div>
    );
}

export default User;