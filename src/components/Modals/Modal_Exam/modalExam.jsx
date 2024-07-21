import React from 'react';
import { useParams } from 'react-router-dom';

import './modalExam.css';

const ModalExam = ({isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay_main">
            <div className="modal-overlay">
                <div className="modal-container">
                    <button className="close-button" onClick={onClose}>X</button>
                    <div className="modal-container-content">
                        <h1>Estructura de examen de admisión por área</h1>
                        <img src="/src/assets/images/estructura_examen_unmsm.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalExam;
