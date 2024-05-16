import React from "react";
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
                <a href="#" className="nav_link">
                  Inicio
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Universidades
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Foro
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Biblioteca Virtual
                </a>
              </li>
            </ul>
        </nav>
        <div className="actions_container">
            <button className="action_button"></button>
            <button className="action_button"></button>
        </div>
    </header>
  );
};
