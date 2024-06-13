import "./styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../Modal";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export const Language = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <NavBar></NavBar>
            <main>
                <h1>Lenguaje</h1>
                <div className="themes__main">
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La comunicación</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Planes del lenguaje</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Fonética y fonología</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Concurrencia de vocales</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Tildación</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">Morfología</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Semántica</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Sustantivo</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">El adjetivo y los determinantes</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">El pronombre</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo y sus clases</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">El adverbio</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La conjunción y la preposición</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">La oración</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">El predicado</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Oración compuesta I</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                    <div className="theme__container" onClick={() => setShowModal(!showModal)}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Oración compuesta II</div>
                        <Modal estado = {showModal} setEstado = {setShowModal}>
                            <div className="LevelContent">
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
                        </Modal>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Language;