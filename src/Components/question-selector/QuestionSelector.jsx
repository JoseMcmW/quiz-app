import React, { useState, useEffect } from "react";
import { unselectedIcon, correctIcon, incorrectIcon } from "../svg";
import style from "./questionSelector.module.css";

function shuffleArray(array) {

  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function QuestionSelector({ onNext, data, currentQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const totalQuestions = data.length;
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  useEffect(() => {

    if (currentQuestion > 0 && currentQuestion <= totalQuestions) {
      const currentQuestionData = data[currentQuestion - 1];
      const options = [
        currentQuestionData.option1,
        currentQuestionData.option2,
        currentQuestionData.option3,
        currentQuestionData.option4,
      ];
      const shuffled = shuffleArray(options);
      setShuffledOptions(shuffled);
      setCorrectAnswer(currentQuestionData.option1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsAnswerSelected(false)
    }
  }, [currentQuestion, data, totalQuestions]);

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
    setIsCorrect(option === correctAnswer);
    setIsAnswerSelected(true);
  };

  return (
    <div className={style.containerOption}>
      <ul>
        {data.map((question, index) => {
          if (index + 1 === currentQuestion) {
            return (
              <React.Fragment key={index}>
                {shuffledOptions.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`${style.option} ${
                      selectedAnswer === option && isCorrect
                        ? style.correct
                        : selectedAnswer === option && !isCorrect
                        ? style.incorrect
                        : (correctAnswer === option && !isCorrect) && (selectedAnswer)
                        ? style.correct
                        : ""
                    }`}
                    onClick={() => handleSelectAnswer(option) ? null : handleSelectAnswer(option)}
                  >
                    <p>{option}</p>
                    <span>
                    {
                      selectedAnswer === option && isCorrect
                        ? <>{correctIcon}</>
                        : selectedAnswer === option && !isCorrect
                        ? <>{incorrectIcon}</>
                        : (correctAnswer === option && !isCorrect) && (selectedAnswer)
                        ? <>{correctIcon}</>
                        : <>{unselectedIcon}</>
                    }
                    </span>
                  </li>
                ))}
              </React.Fragment>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default QuestionSelector;
