import "./styles.css"
import { Link } from "react-router-dom"
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export const Area = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
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
                            <div className="Area__Name">Ciencias Económicas y de la Gestión</div>
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
                <Footer></Footer>
            </footer>
        </div>
    );
}