import React from "react";
import sideBar from "./sideBar.css";
import { MdDashboard } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { GiClothes } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { HiDocumentText } from "react-icons/hi2";
import { FcPlanner } from "react-icons/fc";
import { FaMessage } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <main className="body">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="./images/logo.jpeg" alt="logo" />
          <h2>AGP-TECH</h2>
        </div>
        <hr />
        <ul className="sidebar-links">
          <h4>
            <span>Menu principal</span>
          </h4>
          <li>
            <Link className="lien" to="/">
              <span className="icon-dashboard">
                <MdDashboard size={30} />
                Tableau de bord
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="#">
              <span className="icon-rapport">
                <TbReportAnalytics size={30} />
                Rapports
              </span>
            </Link>
          </li>
          <h4>
            <span>Général</span>
          </h4>
          <li>
            <Link className="lien" to="clients">
              <span className="icon-clients">
                <GoPersonFill size={30} />
                Clients
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="clothes">
              <span className="icon-clothes">
                <GiClothes size={35} />
                Vêtements
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="category_Clothes">
              <span className="icon-category_Clothes">
                <BiSolidCategory size={30} />
                Catégorie de vêtements
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="/depot">
              <span className="icon-depot">
                <TiDocumentText size={30} />
                Dépôt de vêtements
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="/factures">
              <span className="icon-factures">
                <HiDocumentText size={30} />
                Factures
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="/planning">
              <span className="icon-planning">
                <FcPlanner size={30} />
                Rendez-vous
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="/message">
              <span className="icon-message">
                <FaMessage size={30} />
                Message
              </span>
            </Link>
          </li>
          <h4>
            <span>Comptes</span>
          </h4>
          <li>
            <Link className="lien" to="/users">
              <span className="icon-users">
                <BsPersonCircle size={30} />
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="/settings">
              <span className="icon-settings">
                <MdSettings size={30} />
                Paramètres
              </span>
            </Link>
          </li>
          <li>
            <Link className="lien" to="#">
              <span className="icon-logout">
                <FaPowerOff size={30} />
                Déconnexion
              </span>
            </Link>
          </li>
        </ul>
        <div className="user-account">
            <div className="user-profile">
              <img src="./images/3.jpg" alt="image-profil" />
              <div className="user-detail">
                <h5>Yasmine</h5>
                <span>Caisse</span>
              </div>
            </div>
        </div>
      </aside>
    </main>
  );
};

export default SideBar;
