import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Lib/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./Components/clients/Pages/client";
import Dashboard from "./Components/dashboard/dashboard";
import Clothe from "./Components/clothes/Pages/clothe";
import CategoryClothe from "./Components/category_Clothes/Pages/category_Clothe";
import Depot from "./Components/depot/pages/depot";
import Facture from "./Components/factures/pages/facture";
import Planning from "./Components/planning/pages/planning";
import Message from "./Components/message/message";
import Rapport from "./Components/rapports/rapport";
import AddClient from "./Components/clients/create/addClient";
import EditClient from "./Components/clients/[id]/edit/editClient";
import AddClothe from "./Components/clothes/create/addClothe";
import EditClothe from "./Components/clothes/[id]/edit/editClothe";
import AddCategory from "./Components/category_Clothes/create/addCategory";
import EditCategory from "./Components/category_Clothes/[id]/edit/editCategory";
import Users from "./Components/users/pages/users";
import AddDepot from "./Components/depot/create/addDepot";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rapports" element={<Rapport />} />
            {/* Clients */}
            <Route path="/clients" element={<Client />} />
            <Route path="/clients/addClient" element={<AddClient />} />
            <Route path="/clients/editClient" element={<EditClient />} />
            {/* Vêtements */}
            <Route path="/clothes" element={<Clothe />} />
            <Route path="/clothes/addClothe" element={<AddClothe />} />
            <Route path="/clothes/editClothe" element={<EditClothe />} />
            {/* Catégorie */}
            <Route path="/category_Clothes" element={<CategoryClothe />} />
            <Route path="/category_Clothes/addCategory" element={<AddCategory />} />
            <Route path="/category_Clothes/editCategory" element={<EditCategory />} />
            {/* Dépôt */}
            <Route path="/depot" element={<Depot />} />
            <Route path="/depot/addDepot" element={<AddDepot />} />
            <Route path="/depot/editDepot" element />
            {/* Factures */}
            <Route path="/factures" element={<Facture />} />
            <Route path="/factures/addFactures" element />
            <Route path="/factures/editFactures" element />
            {/* Rendez-vous */}
            <Route path="/planning" element={<Planning />} />
            <Route path="/planning/addPlanning" element />
            <Route path="/planning/editPlanning" element />
            {/* Message */}
            <Route path="/message" element={<Message />} />
            {/* Utilisateurs */}
            <Route path="/users" element={<Users />} />
            <Route path="/users/addUsers" element />
            <Route path="/users/editUsers" element />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
