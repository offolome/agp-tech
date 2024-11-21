import React from "react";
import UserList from "./usersList";

const Users = () => {
    return(
        <div className="container">
            <h1>PROFIL</h1>
            {/* Liste des utilisateurs */}
            <div className="list-users">
                <UserList />
            </div>
        </div>
    );
}

export default Users;