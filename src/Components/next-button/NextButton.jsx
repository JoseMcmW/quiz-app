import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./nextButton.module.css";

function NextButton({ onNext, data, currentQuestion }) {
  const totalQuestions = data.length;
  const navigate = useNavigate();

  const handleQuizCompletion = () => {
    window.alert("Quiz finalizado.");
    navigate("/");
  };

  return (
    <div className={style.container}>
      {totalQuestions === currentQuestion ? (
        <button className={style.button} onClick={handleQuizCompletion}>
          Next
        </button>
      ) : (
        <button className={style.button} onClick={onNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default NextButton;
