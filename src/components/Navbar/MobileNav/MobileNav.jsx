import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className="mobile-menu-container">
                    <img src="./images/logo.png" alt="" className="logo" />

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
                </div>
            </div>
        </>
    );
}

export default MobileNav;