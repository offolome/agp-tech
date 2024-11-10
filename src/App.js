import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./Components/clients/Pages/client";
import SideBar from "./Lib/sideBar";
import Dashboard from "./Components/dashboard/dashboard";
import Clothe from "./Components/clothes/Pages/clothe";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <SideBar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Client />} />
              <Route path="/clothes" element={<Clothe />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
