import React from "react";
import User from "../../../Data/users";

const UserList = () => {
    return (
        <>
            <div className="table">
                <table className="table-users">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Nom utilisateur</th>
                            <th>Email</th>
                            <th>Lieu d'habitation</th>
                            <th>Contacts</th>
                            <th>Editer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.residenceUser}</td>
                                    <td>{user.contact}</td>
                                    <td className="icon"></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserList;