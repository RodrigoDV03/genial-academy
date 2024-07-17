import "./styles.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import ModalLevel from "../../components/Modals/Modal_Level/modalLevel";

export const Level = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [questions, setQuestion] = useState([]);

    const {theme_id, level_id} = params;

    //redireccion
    useEffect(() => {
        if (!["Avanzado", "Intermedio", "Básico"].includes(level_id)) {
            navigate('/home');
        }
    }, [level_id, navigate]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    `https://genial-academy-backend.onrender.com/quizzes/findByTopicId/${theme_id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                let question = response.data.slice(0, 7);
                setQuestion(question);
            } catch (error) {
                console.error("Error fetching questions data:", error);
            }
        };
        fetchQuestions();
    }, []);

    const optionsChar = [
        "a","b", "c", "d", "e", "f"
    ]

    let s = []
    for (let index = 0; index < questions.length; index++) {
        s[index] = -1
    }

    const [selection, setSelection] = useState(s);
    const [openClose, setOpenClose] = useState(false);
    const [result, setResult] = useState({ coins: 0, correct: 0, incorrect: 0});

    function calculateResult() {
        const coin = 3;
        const penaltyCoin = 1;
        const newResult = {coins: 0, correct: 0, incorrect: 0}
        questions.forEach((question, number_q)=> {
            question.options.forEach((option, number_o) => {
                if(number_o == selection[number_q]) {
                    if(option.isCorrect){
                        newResult.correct++
                    }
                    else {
                        newResult.incorrect++
                    }
                }
            });
        }); 
        newResult.coins = newResult.correct*coin - newResult.incorrect*penaltyCoin;
        if(newResult.coins < 0) {
            newResult.coins = 0;
        }
        setResult(newResult);
        return true;
    }

    function handelSelection(number_q, select) {
        const newSelection = [...selection];
        if(newSelection[number_q] == select) {
            newSelection[number_q] = -1;
        }
        else {
            newSelection[number_q] = select;
        }
        setSelection(newSelection);
    }

    function generateOptions(options, number_q) {
        const html = [];
        options.forEach((option, i) => {
            html.push(
                <div className="question">
                    <div className={`question_selector ${selection[number_q] == i? "question_selector_selected" : ""}`}
                        onClick={()=>handelSelection(number_q, i)}
                    >
                        {optionsChar[i]}
                    </div>
                    <p>{option.optionText}</p>
                </div>
            );
        });
        return html;
    }

    function questionSection(question, number_q) {
        return (
            <div className="question__container">
                <h4>Pregunta {number_q+1}:</h4>
                <br/>
                <p>{question.question}</p>
                <br/>
                <div className="question__answer">
                    {generateOptions(question.options, number_q)}
                </div>
            </div>
        );
    }

    function generateFlex() {
        const html = [];
        questions.forEach((question, index) => {
            html.push(
                questionSection(question, index)
            );
        });
        return html;
    }

    return (
        <div>
            <NavBar></NavBar>
            <main className="level_screen">
                <h1>Nivel {level_id}</h1>
                <div className="questions_container">
                    {generateFlex()}
                </div>
                <div className="submit__button__container">
                    <button className="submit__button"
                        onClick={()=>{
                            calculateResult();
                            setOpenClose(true)
                        }}>
                        Terminar
                    </button>
                </div>
                <button className="back__button" onClick={()=> navigate(-1)}>
                    <img src="/src/assets/images/back_arrow.png" alt="volver" />
                </button>
            </main>
            <Footer></Footer>
            <ModalLevel 
                isOpen={openClose} 
                onClose={()=>[setOpenClose(false), navigate(-1)]}
                result={result} 
                linkTo={'https://drive.google.com/file/d/1DsaTGDzTfrhj9vJ4ZbFJp8oFEtOKrIMH/view'}
            />
        </div>
    );
}

export default Level;