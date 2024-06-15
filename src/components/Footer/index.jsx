import React from "react";
import "./styles.css";

export const Footer = () => { 
    return (
        <footer>
            <div className="row_1">
                <div className="logo">
                    <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
                </div>
                <div className="footer_nav">
                    <a className="footer__nav__item" href="#">Política de privacidad</a>
                    <a className="footer__nav__item" href="#">Ayuda</a>
                    <a className="footer__nav__item" href="#">Acuerdo de suscripción</a>
                    <a className="footer__nav__item" href="#">Sobre nosotros</a>
                    <a className="footer__nav__item" href="#">Dispositivos compatibles</a>
                </div>
                <div className="social_container">
                    <button className="social_item"></button>
                    <button className="social_item"></button>
                    <button className="social_item"></button>
                </div>
            </div>
            <div className="row_2">
                <p>@2024 GenialAcademy. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}