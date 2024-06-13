import "./styles-unmsm.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalExam from "../../components/Modals/Modal_Exam/modalExam";
export const Unmsm = () => {
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
      <div>
        <div className="banner__unmsm">
          <figure className="banner__figure">
            <img src="/src/assets/images/header1.png" className="figure__img" alt="Banner" />
          </figure>
          <div className="banner__text">
            <div className="text__title">
              <h1>Bienvenido a UNMSM</h1>
              <img src="/src/assets/images/unmsm.png" alt="UNMSM" />
            </div>
            <p className="text__paragraph">
              Descubre tu camino hacia el éxito universitario con ArdillaGenius, tu compañero de estudio personalizado. En esta sección exclusiva, te invitamos a explorar las oportunidades educativas que la UNMSM tiene para ofrecer y toda la información que necesitas saber como preuniversitario.
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
                <a href="/area">Descubre tu area</a>
              </button>
            </div>
          </div>
        </section>
        <section className="main__areas">
          <h2>Áreas</h2>
          <div className="areas">
            <div className="areas__button">
              <div className="button__image">
                <a href="#"><img src="/src/assets/images/doctor.png" alt="" /></a>
              </div>
              <div className="button__text">
                <h4>Área A</h4>
                <p>Ciencias de la Salud</p>
              </div>
            </div>
            <div className="areas__button">
              <div className="button__image">
                <a href="#"><img src="/src/assets/images/calculator.png" alt="" /></a>
              </div>
              <div className="button__text">
                <h4>Área B</h4>
                <p>Ciencias Básicas</p>
              </div>
            </div>
            <div className="areas__button">
              <div className="button__image">
                <Link to = {'/areac'}><img src="/src/assets/images/technology.png" alt="" /></Link>
              </div>
              <div className="button__text">
                <h4>Área C</h4>
                <p>Ingeniería</p>
              </div>
            </div>
            <div className="areas__button">
              <div className="button__image">
                <a href="#"><img src="/src/assets/images/economy.png" alt="" /></a>
              </div>
              <div className="button__text">
                <h4>Área D</h4>
                <p>Ciencias Económicas y de la Gestión</p>
              </div>
            </div>
            <div className="areas__button">
              <div className="button__image">
                <a href="#"><img src="/src/assets/images/law.png" alt="" /></a>
              </div>
              <div className="button__text">
                <h4>Área E</h4>
                <p>Humanidades y Ciencias Jurídicas y Sociales</p>
              </div>
            </div>
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
export default Unmsm;