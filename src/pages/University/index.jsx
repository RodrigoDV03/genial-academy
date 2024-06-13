import "./styles-unmsm.css"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalExam from "../../components/Modals/Modal_Exam/modalExam";

export const University = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const params = useParams();

    const {uni_id} = params;

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

    //TODO: conectar a la bd
    function getAreasById(uni_id) {
      return [
        {
          id: 'areaa',
          name: 'Área A',
          desc: 'Ciencias de la Salud',
          img: 'doctor'
        },
        {
          id: 'areab',
          name: 'Área B',
          desc: 'Ciencias Básicas',
          img: 'calculator'
        }
        ,
        {
          id: 'areac',
          name: 'Área C',
          desc: 'Ingenierías',
          img: 'technology'
        }
        ,
        {
          id: 'aread',
          name: 'Área D',
          desc: 'Ciencias Económicas y de la Gestión',
          img: 'economy'
        }
        ,
        {
          id: 'areae',
          name: 'Área E',
          desc: 'Humanidades y Ciencias Jurídicas y Sociales',
          img: 'law'
        }
      ]
    }

    const AREA =  getAreasById(uni_id);

    function areaCard(area) {
      return (
        <div className="areas__button">
          <Link to={area.id}>
          <div className="button__image">
            <img src={`/src/assets/images/${area.img}.png`} alt="" />
          </div>
          </Link>
          <div className="button__text">
            <h4>{area.name}</h4>
            <p>{area.desc}</p>
          </div>
        </div>
      )
      
    }

    function generateGrid() {
      const html = [];
      AREA.forEach(area => {
        html.push(
          areaCard(area)
        );
      });
      return html;
    }
    

    return (
    <div>
      <NavBar></NavBar>
      <div>
        <div className="banner__unmsm">
          <figure className="banner__figure">
            <img src="/src/assets/images/header1.png" className="figure__img" alt="Banner" />
          </figure>
          <div className="banner__text">
            <div className="text__title">
              <h1>Bienvenido a {uni_id}</h1>
              <img src={`/src/assets/images/${uni_id}.png`} alt="UNMSM" />
            </div>
            <p className="text__paragraph">
              Descubre tu camino hacia el éxito universitario con ArdillaGenius, tu compañero de estudio personalizado. En esta sección exclusiva, te invitamos a explorar las oportunidades educativas que la {uni_id} tiene para ofrecer y toda la información que necesitas saber como preuniversitario.
            </p>
          </div>
        </div>
      </div>
      <main>
        <section className="main__steps">
          <h2>¿Cómo acceder al material de estudio?</h2>
          <div className="steps">
            <div className="steps__number">
              <div className="number__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img src="/src/assets/images/list1.png" className="number__img" alt="" />
              </div>
              <div className="number__text">
                <h3>01</h3>
                <p>Primero debes de seleccionar una área al cual vas a postular.</p>
              </div>
            </div>
            <div className="steps__number">
              <div className="number__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img src="/src/assets/images/list2.png" className="number__img" alt="" />
              </div>
              <div className="number__text">
                <h3>02</h3>
                <p>Después, se abrirá una nueva ventana con secciones dedicadas a preguntas por curso y exámenes de admisión.</p>
              </div>
            </div>
            <div className="steps__number">
              <div className="number__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img src="/src/assets/images/list3.png" className="number__img" alt="" />
              </div>
              <div className="number__text">
                <h3>03</h3>
                <p>Haz clic en la sección de preguntas por curso para acceder a un conjunto diverso de recursos, incluyendo preguntas, resúmenes y libros.</p>
              </div>
            </div>
            <div className="steps__number">
              <div className="number__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img src="/src/assets/images/list4.png" className="number__img" alt="" />
              </div>
              <div className="number__text">
                <h3>04</h3>
                <p>Una vez dentro, podrás elegir un curso específico y explorar detalladamente las preguntas, resúmenes y libros relacionados con ese tema en particular.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="main__card">
          <div className="card">
            <img src="/src/assets/images/explora.png" alt="" />
            <div className="card__text">
              <p className="card__paragraph">Explora, Sueña, Descubre el área que pertenece tu carrera con un clic</p>
              <button className="card__button">
              <Link to = {'area'}> Descubre tu area</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="main__areas">
          <h2>Áreas</h2>
          <div className="areas">
            {generateGrid()}
          </div>
        </section>
        <section className="main__card">
          <h2>Información sobre el formato de exámenes de admisión</h2>
          <div className="card">
            <img src="/src/assets/images/informacion.png" className="card__img" alt="" />
            <div className="card__text">
              <p className="card__paragraph">¿Quisieras saber cuántas preguntas vienen por cada área? Descúbrelo con un solo clic</p>
              <div className="buttonContainer">
                <button onClick={handleOpenModal}>Estructura de examen de admisión</button>
              </div>
              <ModalExam isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
    );
}
export default University;