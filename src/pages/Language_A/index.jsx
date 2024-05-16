import "./styles.css"
import { Link } from "react-router-dom";

export const Language = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div className="nav__logo-container">
                        <div className="nav__logo">
                            <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
                        </div>
                    </div>
                    <nav className="nav">
                        <div className="nav__ul-container">
                            <ul className="nav__ul">
                                <li className="nav__item"><Link to="/home" className="nav__link">Inicio</Link></li>
                                <li className="nav__item"><a href="#" className="nav__link">Universidades</a></li>
                                <li className="nav__item"><a href="#" className="nav__link">Foro</a></li>
                                <li className="nav__item"><a href="#" className="nav__link">Biblioteca Virtual</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
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
            <footer>
                <div className="footer__container">
                        <div className="footer__logo"> 
                            <img src="/src/assets/images/GENIALACADEMY_LOGO.png" />
                        </div>
                    <div className="footer__list">
                        <ul>
                            <li>Política de privacidad</li>
                            <li>Ayuda</li>
                            <li>Acuerdo de suscripción</li>
                            <li>Sobre nosotros</li>
                            <li>Dispositivos compatibles</li>
                        </ul>
                    </div>
                    <div className="social__media">
                        <div className="social__media-container">
                            <div className="social__media-icon">
                                <div className="social__media-image">
                                    <img src="/src/assets/images/facebook.png"/>
                                </div>
                            </div>
                            <div className="social__media-icon">
                                <div className="social__media-image">
                                    <img src="/src/assets/images/instagram.png"/>
                                </div>
                            </div>
                            <div className="social__media-icon">
                                <div className="social__media-image">
                                    <img src="/src/assets/images/twitter.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Language;