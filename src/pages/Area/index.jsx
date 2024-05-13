import "./styles.css"

export const Area = () => {
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
                                <li className="nav__item"><a href="#" className="nav__link">Inicio</a></li>
                                <li className="nav__item"><a href="#" className="nav__link">Universidades</a></li>
                                <li className="nav__item"><a href="#" className="nav__link">Foro</a></li>
                                <li className="nav__item"><a href="#" className="nav__link">Biblioteca Virtual</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <div className="Content">
                    <div className="Content__Text">
                        <h2>Descubre al área que perteneces</h2>
                        <p>
                            Explorar tu camino académico nunca fue tan emocionante. Aquí, te invitamos a sumergirte en cinco fascinantes secciones, cada una repleta de carreras y oportunidades únicas, descubre a que área pertenece la carrera en la cuál postulas.
                        </p>
                    </div>
                    <div className="Content__image">
                    </div>
                </div>
                <div className="Areas">
                    <div className="Areas__container">
                        <div className="Area__title">
                            <div className="Area__Letter">Área A: </div>
                            <div className="Area__Name">Ciencias de la Salud</div>
                        </div>
                        <div className="Area__Careers">
                            <ul>
                                <li>Medicina Humana</li>
                                <li>Obstetricía</li>
                                <li>Enfermería</li>
                                <li>Tecnología Médica</li>
                                <li>Laboratorio Clínico y Anatomía Patológica</li>
                                <li>Terapia física y rehabilitación</li>
                                <li>Radiología</li>
                                <li>Psicología Organizacional y de la Gestión Humana</li>
                                <li>Terapia ocupacional</li>
                                <li>Nutrición</li>
                                <li>Farmacia y Bioquímica</li>
                                <li>Ciencias de los Alimentos</li>
                                <li>Toxicología</li>
                                <li>Odontología</li>
                                <li>Medicina Veterinaria</li>
                                <li>Psicología</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Areas__container">
                        <div className="Area__title">
                            <div className="Area__Letter">Área B: </div>
                            <div className="Area__Name">Ciencias Básicas</div>
                        </div>
                        <div className="Area__Careers">
                            <ul>
                                <li>Química</li>
                                <li>Ciencias Biológicas</li>
                                <li>Genética y Biotecnología</li>
                                <li>Microbiología y Parasitología</li>
                                <li>Física</li>
                                <li>Matemática</li>
                                <li>Estadística</li>
                                <li>Investigación Operativa</li>
                                <li>Computación Científica</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Areas__container">
                        <div className="Area__title">
                            <div className="Area__Letter">Área C: </div>
                            <div className="Area__Name">Ingenierías</div>
                        </div>
                        <div className="Area__Careers">
                            <ul>
                                <li>Ingienería Química</li>
                                <li>Ingienería Agroindustrial</li>
                                <li>Ingienería Mecánica de Fluidos</li>
                                <li>Ingienería Geologica</li>
                                <li>Ingieneria de Minas</li>
                                <li>Ingieneria Metalurgia</li>
                                <li>Ingieneria Ambiental</li>
                                <li>Ingieneria  Industrial</li>
                                <li>Ingieneria Textil y Confecciones</li>
                                <li>Ingieneria de Seguridad y Salud de trabajo</li>
                                <li>Ingieneria Electronica</li>
                                <li>Ingieneria Electrica</li>
                                <li>Ingieneria de telecomunicaciones</li>
                                <li>Ingieneria de Sistemas</li>
                                <li>Ingieneria de Software</li>
                                <li>Ingieneria Civil</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Areas__container">
                        <div className="Area__title">
                            <div className="Area__Letter">Área D: </div>
                            <div className="Area__Name">Ciencias Econoómicas y de la Gestión</div>
                        </div>
                        <div className="Area__Careers">
                            <ul>
                                <li>Administración</li>
                                <li>Administración de Turismo</li>
                                <li>Administración de Negocios Internacionales</li>
                                <li>Contabilidad</li>
                                <li>Gestión Tributaria</li>
                                <li>Auditoria Empresarial y del Sector Público</li>
                                <li>Economía</li>
                                <li>Economía Pública</li>
                                <li>Economía Internacional</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Areas__container">
                        <div className="Area__title">
                            <div className="Area__Letter">Área E: </div>
                            <div className="Area__Name">Humanidades</div>
                        </div>
                        <div className="Area__Careers">
                            <ul>
                                <li>Literatura</li>
                                <li>Filosofía</li>
                                <li>Lingüística</li>
                                <li>Comunicación social</li>
                                <li>Arte</li>
                                <li>Conservación y Restauración</li>
                                <li>Bibliotecología y Ciencias de la Información</li>
                                <li>Danza</li>
                                <li>Educación Inicial</li>
                                <li>Educación Primaria</li>
                                <li>Educación Secundaria</li>
                                <li>Educación Física</li>
                            </ul>
                        </div>
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