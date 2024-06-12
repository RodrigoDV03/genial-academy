import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './modalLogin.css';

const ModalLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Login-overlay">
        <div className="modal-Login-container">
            <div className="Contenido_Login">
                <h1>Bienvenido a GenialAcademy</h1>
                <img src='/src/assets/images/Login_Success_Icon.png' className='Login_Success_Image' />
                <div className="Login_button">
                    <Link to="/home"className='Login-link'  onClick={onClose}>Ingresar</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModalLogin;
