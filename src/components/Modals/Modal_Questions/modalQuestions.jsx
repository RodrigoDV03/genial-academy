import React, { useState } from 'react';
import './modalQuestions.css';

const ModalQuestions = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
    <div className="modal-window-overlay">
        <div className="LevelContent">
            <button className="close-button" onClick={onClose}>X</button>
            <h1>Preguntas</h1>
            <div className="levelsContainer">
                <div className="level">
                    <div className="level__image basic"></div>
                    <div className="level__title">
                        <p>Basico</p>
                    </div>
                </div>
                <div className="level">
                    <div className="level__image medium">
                    </div>
                    <div className="level__title">
                        <p>Intermedio</p>
                    </div>
                </div>
                <div className="level">
                    <div className="level__image advanced"></div>
                    <div className="level__title">
                        <p>Avanzado</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
};

export default ModalQuestions;
