import React from "react";
import { Link } from "react-router-dom";
import style from "./progressBar.module.css";

function BarProgress(props) {
  const totalQuestions = props.data.length;
  const completedPercentage = (props.currentQuestion / totalQuestions) * 70;

  return (
    <div className={style.containerBarProgress}>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <rect
            x="11.3431"
            y="9.92893"
            width="18"
            height="2"
            rx="1"
            transform="rotate(45 11.3431 9.92893)"
            fill="#1C1C1C"
          />
          <rect
            x="9.92896"
            y="22.6569"
            width="18"
            height="2"
            rx="1"
            transform="rotate(-45 9.92896 22.6569)"
            fill="#1C1C1C"
          />
          <circle cx="17" cy="17" r="16.5" stroke="#EFEFEF" />
        </svg>
      </Link>
      <div className={style.progressContainer}>
        <div
          className={style.progressBar}
          style={{ width: `${completedPercentage}%` }}
        />
        <div className={style.bottomBar}/>
        <div className={style.currentQuestionContainer}>
          <p className={style.currentQuestion}>
            {props.currentQuestion}/{totalQuestions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BarProgress;
