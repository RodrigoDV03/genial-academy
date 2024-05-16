import React, { useState } from 'react'
import { ModalExam } from '../ModalExam'
import { Link } from 'react-router-dom'
import './styles.css'


export const Home = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="container">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to={"/area"}>
                        Area
                    </Link>
                </li>
                <li>
                    <Link to={"/language"}>
                        Lenguaje
                    </Link>
                </li>
            </ul>

            <div className="buttonContainer">
                <button onClick={() => setShowModal(!showModal)}>Ventana modal</button>
            </div>
            
            <ModalExam estado = {showModal} setEstado = {setShowModal}>
                <div className="Contenido">
                    <h1>Estructura de examen de admisión por área</h1>
                    <div className="img"></div>
                </div>
            </ModalExam>
        </div>
    )
}