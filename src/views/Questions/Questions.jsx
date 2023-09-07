import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarProgress from "../../Components/progressBar/progressBar";
import QuestionTimer from "../../Components/question-timer/QuestionTimer";
import QuestionSelector from "../../Components/question-selector/QuestionSelector";
import NextButton from "../../Components/next-button/NextButton";
import style from "./question.style.css";

function Questions() {
  const { id } = useParams();
  const [questionsData, setQuestionsData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  const fetchDataQuestion = async () => {
    try {
      const { data } = await axios.get(
        `https://quiz-7.com/questions/${id}.json`
      );
      setQuestionsData(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchDataQuestion();
  }, []);

  return (
    <div className={style.container}>
      {questionsData && (
        <>
          <BarProgress data={questionsData} currentQuestion={currentQuestion} />
          <QuestionTimer onNext={handleNextQuestion} data={questionsData} currentQuestion={currentQuestion} />
          <QuestionSelector onNext={handleNextQuestion} data={questionsData} currentQuestion={currentQuestion}/>
          <NextButton onNext={handleNextQuestion} data={questionsData} currentQuestion={currentQuestion}/>
        </>
      )}
    </div>
  );
}

export default Questions;
