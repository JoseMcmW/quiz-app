import React from "react";
import { shadow } from "../svg";
import style from "./cardCategory.module.css";

function CardCategories(props) {
  let heightClass = style.cardNormal;
  let upClass = style.cardUp;

  if (props.isFirst) {
    heightClass = style.cardSmall;
  } else if (props.isLast) {
    heightClass = style.cardSmall;
  }

  if (props.id === 3) {
    upClass = `${upClass} ${style.cardUpForId3}`;
  } else if (props.id === 5) {
    upClass = `${upClass} ${style.cardUpForId5}`;
  }

  return (
    <div className={`${style.containerCard} ${heightClass} ${upClass}`}>
      <img src={`https://quiz-7.com/${props.imageUrl}`} alt="img-category" className={style.imgCard} />
      <span className={style.shadow}>{shadow}</span>
      <h2 className={style.titleCard}>{props.title}</h2>
      <p className={style.questionsCard}>{props.questions} questions</p>
    </div>
  );
}

export default CardCategories;
