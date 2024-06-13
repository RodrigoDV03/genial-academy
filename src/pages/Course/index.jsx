import "./styles.css"
import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalQuestions from "../../components/Modals/Modal_Questions/modalQuestions";
import { useNavigate, useParams } from "react-router-dom";

export const Course = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTheme, setCurrentTheme] = useState("");
    const navigate  = useNavigate();

    const params = useParams();
    const {uni_id, area_id, course_id} = params


    const handleOpenModal = (theme) => {
        setCurrentTheme(theme);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    function getThemesById(uni_id, area_id, course_id) {
        return [
            {
                id: 'lacomunicacion',
                name: 'La comunicación'
            },
            {
                id: 'planesdellenguaje',
                name: 'Planes del lenguaje'
            },
            {
                id: 'foneticayfonologia',
                name: 'Fonética y fonología'
            },
            {
                id: 'concurrenciadevocales',
                name: 'Concurrencia de vocales'
            },
            {
                id: 'tildacion',
                name: 'Tildación'
            },
            {
                id: 'morfologia',
                name: 'Morfología'
            },
            {
                id: 'semantica',
                name: 'Semántica'
            },
            {
                id: 'sustantivo',
                name: 'Sustantivo'
            },
            {
                id: 'eladjetivoylosdeterminantes',
                name: 'El adjetivo y los determinantes'
            },
            {
                id: 'elpronombre',
                name: 'El pronombre'
            },
            {
                id: 'elverboysusclases',
                name: 'El verbo y sus clases'
            },
            {
                id: 'elverbo',
                name: 'El verbo'
            },
            {
                id: 'eladverbio',
                name: 'El adverbio'
            },
            {
                id: 'laconjuncionylapreposicion',
                name: 'La conjunción y la preposición'
            },
            {
                id: 'laoracion',
                name: 'La oración'
            },
            {
                id: 'elpredicado',
                name: 'El predicado'
            },
            {
                id: 'oracioncompuestaI',
                name: 'Oración compuesta I'
            },
            {
                id: 'oracioncompuestaII',
                name: 'Oración compuesta II'
            }
        ];
    }

    const THEMES = getThemesById(uni_id, area_id, course_id);

    const colors = [
        "#D99",
        "#DC8",
        "#8D8",
        "#DA5",
        "#78E",
    ];

    function themeCard(theme, index) {
        return (
            <div className="theme__container" onClick={() => handleOpenModal(theme)}>
                <div className="theme__color" style={{background: colors[index]}}></div>
                <div className="themes__title">{theme.name}</div>
            </div>
        );
    }

    function generateGrid() {
        const html = [];
        THEMES.forEach((theme, index) => {
            index = index % 5
            html.push(
                themeCard(theme, index)
            );
        });
        return html;
    }

    return (
        <div>
            <NavBar></NavBar>
            <main>
                <div id="navigation">
                    <h4 id="btnunmsm">{uni_id} &gt; {area_id} &gt; {course_id}</h4>
                    <button name="btnregresar" id="btnregresar" onClick={() => navigate(-1)}></button>
                </div>
                <h1>{course_id.toUpperCase()}</h1>
                <div className="themes__main">
                    {generateGrid()}
                    <ModalQuestions theme={selectedTheme} isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Course;