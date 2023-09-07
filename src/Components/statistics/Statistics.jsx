import trophy from "../../images/trophy.png";
import coin from "../../images/coin.png";
import style from "./statistics.module.css";

function Statistics (props) {

  return (
    <div className={style.container}>
      <div className={style.stat}>
        <img src={trophy} alt="Trophy" className={style.images}/>
        <div>
          <h3 className={style.title}>Ranking</h3>
          {props && <span className={style.numbers}>{props.user.ranking}</span>}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1"
        height="45"
        viewBox="0 0 1 45"
        fill="#FF9F41"
        className={style.path}
      >
        <path d="M0.5 0V44.7725" stroke="#F1F1F1" />
      </svg>
      <div className={style.stat}>
        <img src={coin} alt="Coin" className={style.images}/>
        <div>
          <h3 className={style.title}>Points</h3>
          {props && <span className={style.numbers}>{props.user.points} </span>}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
