import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCustomizableProgressbar from "react-customizable-progressbar";
import style from "./questionTimer.module.css";

function QuestionTimer({ onNext, data, currentQuestion }) {
  const [progress, setProgress] = useState(40);
  const navigate = useNavigate()


  useEffect(() => {
    let timer;

    const startTimer = () => {
      if (progress > 0) {
        timer = setTimeout(() => {
          setProgress((prevProgress) => prevProgress - 1);
        }, 1000);
      } else {
        if(currentQuestion < data.length) {
          alert("Se terminó el tiempo, pasamos a la siguiente pregunta");
          onNext();
          setProgress(40);
        } else {
          alert("Se terminó el tiempo en la última pregunta");
          navigate("/");
        }
      }
    };

    startTimer();

    return () => {
      clearTimeout(timer);
    };
  }, [progress, onNext,currentQuestion, data, navigate]);

  useEffect(() => {
    setProgress(40);
  }, [currentQuestion]);

  return (
    <div className={style.container}>
      <div className={style.containerProgress}>
        <ReactCustomizableProgressbar
          progress={progress}
          steps={40}
          radius={40}
          strokeWidth={6}
          strokeColor="#3EB8D4"
          trackStrokeWidth={6}
          trackStrokeColor="#EFEFEF"
          className={style.circle}
        >
          <div className={style.indicator}>
            <div>{progress}</div>
          </div>
        </ReactCustomizableProgressbar>
      </div>
      <div className={style.questionBox}>
        {data.map((question, index) => {
          const current = index + 1 === currentQuestion;

          return(
            <p key={question.id}>{current ? question.question : null}</p>
          )
        })}
      </div>
    </div>
  );
}

export default QuestionTimer;
