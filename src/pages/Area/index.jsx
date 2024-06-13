import React from 'react';
import './styles.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

export const Area = () => {

    const navigate = useNavigate();
    const params = useParams();
    const {uni_id, area_id} = params;

    function getCoursesById(uni_id, area_id) {
        return [
            {
              id: 'aritmetica',
              name: 'Aritmética'
            },
            {
              id: 'geometria',
              name: 'Geometría'
            },
            {
              id: 'algebra',
              name: 'Álgebra'
            },
            {
              id: 'trigonometria',
              name: 'Trigonometría'
            },
            {
              id: 'filosofia',
              name: 'Filosofía'
            },
            {
              id: 'literatura',
              name: 'Literatura'
            },
            {
              id: 'lenguaje',
              name: 'Lenguaje'
            },
            {
              id: 'habilidad_matematica',
              name: 'Habilidad Matemática'
            },
            {
              id: 'historia_universal',
              name: 'Historia Universal'
            },
            {
              id: 'historia_peru',
              name: 'Historia del Perú'
            },
            {
              id: 'psicologia',
              name: 'Psicología'
            },
            {
              id: 'economia',
              name: 'Economía'
            },
            {
              id: 'quimica',
              name: 'Química'
            },
            {
              id: 'civica',
              name: 'Cívica'
            },
            {
              id: 'biologia',
              name: 'Biología'
            },
            {
              id: 'fisica',
              name: 'Física'
            }
          ];
    }

    const COURSES = getCoursesById(uni_id, area_id);

    function courseCard(course) {
        return <Link to={course.id} className='link'>
            <div class="circle-button">
                <img src={`/src/assets/images/${course.id}.png`} alt={course.name}/>
                <span>{course.name}</span>
            </div>
        </Link>
    }

    function generateGrid() {
        const html = [];
        COURSES.forEach(course => {
            html.push(
                courseCard(course)
            );
        });
        return html;
    }

    return (
        <div>
            <NavBar></NavBar>
            <section id="section1">
                <div id="contenedor1">
                    <div id="navigation">
                        <h4 id="btnunmsm">{uni_id} &gt; {area_id}</h4>
                        <button name="btnregresar" id="btnregresar" onClick={() => navigate(-1)}></button>
                    </div>
                    <p><img src='/src/assets/images/principal.png' alt="Imagen Principal" id="imgprincipal" /></p>
                </div>
                <div id="contenedor2">
                    <h1 id="titulo">BIENVENIDO AL<br /> {area_id}</h1>
                    <div id="container">
                        <h3>En esta sección encontrarás material educativo para <br />ayudar a tu preparación referente al área de <br />{area_id}.</h3>
                    </div>
                </div>
            </section>

            <section id="section2">
                <h1 id="titulo2">Cursos</h1>
                <div className="button-container" id="button-container1">
                    {generateGrid()}
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
            <Footer></Footer>
        </div>
    );
}


