import React, { useState } from "react";
import 'material-symbols';
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
      <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./images/logo.png" alt="" />

                <ul>
                    <li>
                        <a href="#" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">Experiência de Trabalho</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">Meus Contatos</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>Me Contrate</button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span
                    class={"material-symbols-outlined"}
                    style={{ fontSize: "1.8rem" }}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
      </>
    )
}

export default Navbar;