import React from 'react';
import { Link } from 'react-router-dom';
import './modalLevel.css';

const ModalLevel = ({ isOpen, onClose, result, linkTo }) => {
    if (!isOpen) return null;

    return (
    <div className="modal_level_overlay">
        <div className="modal_level_container">
            <button className="close_button" onClick={onClose}>X</button>
            <div className="level_details"> 

                <div className='detail_row'>
                    <div className='detail_title'>
                        <img src='/src/assets/images/coin.png'></img>
                        <p>Monedas:</p>
                    </div>
                    <p className='level_result'>{result.coins}</p>
                </div>
                
                <div className='detail_row'>
                    <div className='detail_title'>
                        <img src='/src/assets/images/correct.png'></img>
                        <p>Preguntas correctas:</p>
                    </div>
                    <p className='level_result'>{result.correct}</p>
                </div>
                
                <div className='detail_row'>
                    <div className='detail_title'>
                        <img src='/src/assets/images/incorrect.png'></img>
                        <p>Preguntas incorrectas:</p>
                    </div>
                    <p className='level_result'>{result.incorrect}</p>
                </div>
                
            </div>
            <Link to={linkTo} className='solution_level_button'>
                Ver Solucionario
            </Link>
        </div>
    </div>
    )
}

export default ModalLevel;
