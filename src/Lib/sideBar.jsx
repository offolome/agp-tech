import React from "react";
import sideBar from "./sideBar.css";
import { MdDashboard } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { GiClothes } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { TbWashMachine } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi2";
import { FcPlanner } from "react-icons/fc";
import { FaMessage } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa";


export const SideBar = [
  {
    name: "Tableau de bord",
    path: "/",
    icon: <MdDashboard size={25} />,
    cName: "nav-text"
  },
  {
    name: "Rapports",
    path: "/rapports",
    icon: <TbReportAnalytics size={25} />,
    cName: "nav-text"
  },
  {
    name: "Clients",
    path: "/clients",
    icon: <GoPersonFill size={25} />,
    cName: "nav-text"
  },
  {
    name: "Vêtements",
    path: "/clothes",
    icon: <GiClothes size={30} />,
    cName: "nav-text"
  },
  {
    name: "Catégorie de vêtements",
    path: "/category_Clothes",
    icon: <BiSolidCategory size={35} />,
    cName: "nav-text"
  },
  {
    name: "Lavage",
    path: "/depot",
    icon: <TbWashMachine size={30} />,
    cName: "nav-text"
  },
  {
    name: "Factures",
    path: "/factures",
    icon: <HiDocumentText size={25} />,
    cName: "nav-text"
  },
  {
    name: "Rendez-vous",
    path: "/planning",
    icon: <FcPlanner size={25} />,
    cName: "nav-text"
  },
  {
    name: "Messages",
    path: "/message",
    icon: <FaMessage size={25} />,
    cName: "nav-text"
  },
  {
    name: "Profil",
    path: "/users",
    icon: <BsPersonCircle size={25} />,
    cName: "nav-text"
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: <MdSettings size={30} />,
    cName: "nav-text"
  },
  {
    name: "déconnexion",
    path: "#",
    icon: <FaPowerOff size={25} />,
    cName: "nav-text"
  }
]
