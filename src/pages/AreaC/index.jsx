import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
export const AreaC = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <section id="section1">
                <div id="contenedor1">
                    <div id="navigation">
                        <h4 id="btnunmsm">Unmsm &gt; Área C</h4>
                        <Link to={'/unmsm'}><button name="btnregresar" id="btnregresar"></button></Link>
                    </div>
                    <p><img src='/src/assets/images/principal.png' alt="Imagen Principal" id="imgprincipal" /></p>
                </div>
                <div id="contenedor2">
                    <h1 id="titulo">BIENVENIDO AL<br /> ÁREA C</h1>
                    <div id="container">
                        <h3>En esta sección encontrarás material educativo para <br />ayudar a tu preparación referente al área de <br />ingeniería.</h3>
                    </div>
                </div>
            </section>

            <section id="section2">
                <h1 id="titulo2">Cursos</h1>
                <div className="button-container" id="button-container1">
                    <div className="circle-button">
                        <img src='/src/assets/images/abaco.png' alt="Aritmética" />
                        <span>Aritmética</span>
                    </div>
                    <div className="circle-button">
                        <img src='/src/assets/images/geometria.png' alt="Geometría" />
                        <span>Geometría</span>
                    </div>
                    <div className="circle-button">
                        <img src='/src/assets/images/algebra.png' alt="Álgebra" />
                        <span>Álgebra</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/trigonometría.png' alt="Trigonometría"/>
                        <span>Trigonometría</span>
                    </div>
                </div>
                <div class="button-container" id="button-container2">
                    <div class="circle-button">
                        <img src='/src/assets/images/filosofia.png' alt="Filosofía"/>
                        <span>Filosofía</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/literatura.png' alt="Literatura"/>
                        <span>Literatura</span>
                    </div>
                    <Link to={'/language'}>
                        <div class="circle-button">
                            <img src='/src/assets/images/lenguaje.png' alt="Lenguaje"/>
                            <span>Lenguaje</span>
                        </div>
                    </Link>
                    <div class="circle-button">
                        <img src='/src/assets/images/rm.png' alt="Habilidad Matemática"/>
                        <span>Habilidad Matemática</span>
                    </div>
                </div>
                <div class="button-container" id="button-container3">
                    <div class="circle-button">
                        <img src='/src/assets/images/historia.png' alt="Historia Universal"/>
                        <span>Historia Universal</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/historia_peru.png' alt="Historia del Perú"/>
                        <span>Historia del Perú</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/psicología.png' alt="Psicología"/>
                        <span>Psicología</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/economia.png' alt="Economía"/>
                        <span>Economía</span>
                    </div>
                </div>
                <div class="button-container" id="button-container4">
                    <div class="circle-button">
                        <img src='/src/assets/images/quimica.png' alt="Química"/>
                        <span>Química</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/civica.png' alt="Cívica"/>
                        <span>Cívica</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/biologia.png' alt="Biología"/>
                        <span>Biología</span>
                    </div>
                    <div class="circle-button">
                        <img src='/src/assets/images/atomo.png' alt="Física"/>
                        <span>Física</span>
                    </div>
                </div>
            </section>
            <section id="section3">
                <h1 id="titulo3">Exámenes de admisión</h1>
                <div className="exam-container" id="exam-container1">
                    <div className="exam-button">
                        <img src='/src/assets/images/lista.png' alt="2020-I" />
                        <span>2020-I</span>
                    </div>
                    <div className="exam-button">
                        <img src='/src/assets/images/lista.png'  alt="2020-II" />
                        <span>2020-II</span>
                    </div>
                    <div className="exam-button">
                        <img src='/src/assets/images/lista.png'  alt="2021-I" />
                        <span>2021-I</span>
                    </div>
                </div>
                <div class="exam-container" id="exam-container2">
                    <div class="exam-button">
                        <img src='/src/assets/images/lista.png' alt="2021-II"/>
                        <span>2021-II</span>
                    </div>
                    <div class="exam-button">
                        <img src='/src/assets/images/lista.png' alt="2022-I"/>
                        <span>2022-I</span>
                    </div>
                    <div class="exam-button">
                        <img src='/src/assets/images/lista.png' alt="2022-II"/>
                        <span>2022-II</span>
                    </div>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}


