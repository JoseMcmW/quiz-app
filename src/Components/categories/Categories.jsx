import React from "react";
import CardCategory from "../card/CardCategory";
import style from "./categories.module.css";
import { Link } from "react-router-dom";

function Categories(props) {
  return (
    <div className={style.container}>
      <h4 className={style.title}>Let's play</h4>
      <div className={style.containerCard}>
        {props &&
          props.categories.map((category) => {
            let isFirst = category.id === 1;
            let isLast = category.id === props.categories.length;
            let customStyleForId3 = category.id === 3;
            let customStyleForId5 = category.id === 5;

            return (
              <Link to={`/questions/${category.id}`} key={category.id}>
                <CardCategory
                  id={category.id}
                  title={category.title}
                  questions={category.questions}
                  imageUrl={category.icon}
                  isFirst={isFirst}
                  isLast={isLast}
                  customStyleForId3={customStyleForId3}
                  customStyleForId5={customStyleForId5}
                  className={`${style.heightClass} ${style.card}`}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Categories;

