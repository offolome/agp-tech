import React, { useState } from "react";
import navBar from "./navBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SideBar } from "./sideBar";
import { IconContext } from "react-icons";

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const show = () => setSidebar(!sidebar);

    return (
        <div className="container-nav">
            <div className="navbar">
                <Link to="#" className="menu-bar">
                    <FaBars onClick={show} size={30} className="icon-menuOpen" />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={show}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <AiOutlineClose size={30} className="icon-menuClose" />
                        </Link>
                    </li>
                    {
                        SideBar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>

        
    );
}

export default NavBar;