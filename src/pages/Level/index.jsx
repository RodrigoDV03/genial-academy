import "./styles.css"
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

export const Level = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {uni_id, area_id, course_id, theme_id, level_id} = params;

    useEffect(() => {
        if (!["advanced", "medium", "basic"].includes(level_id)) {
            navigate('/home');
        }
    }, [level_id, navigate]);

    const options = [
        "a","b", "c", "d", "e"
    ]

    
    function getQuestionsById(uni_id, area_id, course_id, theme_id, level_id) {
        return [
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
        ];
    }

    const QUESTIONS = getQuestionsById(uni_id, area_id, course_id, theme_id, level_id);

    function generateAnswers(answers) {
        const html = [];
        answers.forEach((answer, i) => {
            html.push(
                <div className="question">
                    <button className="question_selector">{options[i]}</button>
                    <p>{answer.desc}</p>
                </div>
            );
        });
        return html;
    }

    function questionSection(question, index) {
        return (
            <div className="question__container">
                <h4>Pregunta {index+1}:</h4>
                <br/>
                <p>{question.desc}</p>
                <br/>
                <div className="question__answer">
                    {generateAnswers(question.answers)}
                </div>
            </div>
        );
    }

    function generateFlex() {
        const html = [];
        QUESTIONS.forEach((question, index) => {
            html.push(
                questionSection(question, index)
            );
        });
        return html;
    }

    return (
        <div>
            <NavBar></NavBar>
            <main>
                <h1>Nivel {level_id}</h1>
                <div className="questions_container">
                    {generateFlex()}
                </div>
                <div className="submit__button__container">
                    <button className="submit__button">
                        Terminar
                    </button>
                </div>
                <button className="back__button" onClick={()=> navigate(-1)}>
                    <img src="/src/assets/images/back_arrow.png" alt="volver" />
                </button>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Level;