import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <button>{Questions[currentQuestion].optionA}</button>
            <button>{Questions[currentQuestion].optionB}</button>
            <button>{Questions[currentQuestion].optionC}</button>
            <button>{Questions[currentQuestion].optionD}</button>
        </div>
    );
}

export default Quiz;