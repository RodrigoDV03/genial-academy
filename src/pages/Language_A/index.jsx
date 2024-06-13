import "./styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalQuestions from "../../components/Modals/Modal_Questions/modalQuestions";

export const Language = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <NavBar></NavBar>
            <main>
                <h1>Lenguaje</h1>
                <div className="themes__main">
                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La comunicación</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Planes del lenguaje</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Fonética y fonología</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Concurrencia de vocales</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Tildación</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">Morfología</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Semántica</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Sustantivo</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">El adjetivo y los determinantes</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">El pronombre</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo y sus clases</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">El adverbio</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La conjunción y la preposición</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">La oración</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">El predicado</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Oración compuesta I</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                    <div className="theme__container" onClick={handleOpenModal}>
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Oración compuesta II</div>
                    </div>
                    <ModalQuestions isOpen={isModalOpen} onClose={handleCloseModal} />

                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Language;