import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export const NavBar = () => {
  return (
    <header>
        <div className="logo_container">
          <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
        </div>
        <nav className="nav_container">
            <ul className="nav">
              <li className="nav_item">
                <Link to={'/home'} className="nav_link">
                  Inicio
                </Link>
              </li>
              <li className="nav_item">
                <Link to={'/unmsm'} className="nav_link">
                  Universidades
                </Link>
              </li>
              <li className="nav_item">
                <Link to={'/library'} className="nav_link">
                  Biblioteca Virtual
                </Link>
              </li>
            </ul>
        </nav>
        <div className="actions_container">
            <button className="action_button"><img src='/src/assets/images/user.png' alt="Imagen Principal" id="imgprincipal" /></button>
            <button className="action_button"></button>
        </div>
    </header>
  );
};
