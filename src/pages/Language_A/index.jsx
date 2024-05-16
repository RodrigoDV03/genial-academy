import "./styles.css"
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export const Language = () => {
    return (
        <div>
            <NavBar></NavBar>
            <main>
                <h1>Lenguaje</h1>
                <div className="themes__main">
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La comunicación</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Planes del lenguaje</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Fonética y fonología</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Concurrencia de vocales</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Tildación</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">Morfología</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">Semántica</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">Sustantivo</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">El adjetivo y los determinantes</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">El pronombre</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo y sus clases</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">El verbo</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DC8"}}></div>
                        <div className="themes__title">El adverbio</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#D99"}}></div>
                        <div className="themes__title">La conjunción y la preposición</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#8D8"}}></div>
                        <div className="themes__title">La oración</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#78C"}}></div>
                        <div className="themes__title">El predicado</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#DA5"}}></div>
                        <div className="themes__title">Oración compuesta I</div>
                    </div>
                    <div className="theme__container">
                        <div className="theme__color" style={{background: "#78E"}}></div>
                        <div className="themes__title">Oración compuesta II</div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Language;