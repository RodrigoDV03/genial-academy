import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalQuestions from "../../components/Modals/Modal_Questions/modalQuestions";
import { useNavigate, useParams } from "react-router-dom";

export const Course = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTheme, setCurrentTheme] = useState("");

  const [university, setUniversity] = useState(null);
  const [area, setArea] = useState(null);
  const [course, setCourse] = useState(null);
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  const params = useParams();
  const { uni_id, area_id, course_id } = params;

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(
          /**  /home/unmsm/ */
          `https://genial-academy-backend.onrender.com/universities/findAll`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let uni = response.data.filter(
          (university) =>
            university.acronym.toLowerCase() === uni_id.toLowerCase()
        );
        setUniversity(uni[0]);
      } catch (error) {
        console.error("Error fetching university data:", error);
      }
    };

    fetchUniversity();
  }, [uni_id]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get(
          "https://genial-academy-backend.onrender.com/areas/findAll",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let a = response.data.filter(
          (areas) =>
            areas.codArea
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/ /g, "") === area_id.toLowerCase()
        );
        setArea(a[0]);
      } catch (error) {
        console.error("Error fetching areas data:", error);
      }
    };

    fetchAreas();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        `https://genial-academy-backend.onrender.com/courses/findAll`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let course = response.data.filter(
        (course) =>
          course.name.toLowerCase().replace(/ /g, "-").replace(" ", "-") ===
          course_id.toLowerCase()
      );
      setCourse(course[0]);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const fetchTopics = async (course_id) => {
    try {
      console.log("asas");
      console.log(course_id);
      const response = await axios.get(
        `https://genial-academy-backend.onrender.com/topics/findByCourseId/${course_id}`,//
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("asas22");
      let topics = response.data;
      console.log(topics);
      setTopics(topics);
    } catch (error) {
      console.error("Error fetching topics data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCourse();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (course) {
      console.log(course.id); //TODO: course no tiene id
      fetchTopics(course.id); // undefined
    }
  }, [course]);   

  const handleOpenModal = (theme) => {
    setCurrentTheme(theme);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const colors = ["#D99", "#DC8", "#8D8", "#DA5", "#78E"];

  function themeCard(theme, index) {
    return (
      <div className="theme__container" onClick={() => handleOpenModal(theme)}>
        <div
          className="theme__color"
          style={{ background: colors[index] }}
        ></div>
        <div className="themes__title">{theme.name}</div>
      </div>
    );
  }

  function generateGrid() {
    const html = [];
    topics.forEach((theme, index) => {
      index = index % 5;
      html.push(themeCard(theme, index));
    });
    return html;
  }

  return (
    <div>
      <NavBar></NavBar>topics
      <main className="course_screen">
        <div id="navigation">
          <h4 id="btnunmsm">
            {university ? university.acronym : uni_id} &gt;{" "}
            {area ? area.codArea : area_id} &gt;{" "}
            {course ? course.name : course_id}
          </h4>
          <button
            name="btnregresar"
            id="btnregresar"
            onClick={() => navigate(-1)}
          ></button>
        </div>
        <h1>{course ? course.name : course_id}</h1>
        <div className="themes__main">
          {generateGrid()}
          <ModalQuestions
            theme={selectedTheme}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Course;
