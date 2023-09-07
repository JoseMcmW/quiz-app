import userImg from "../../images/happy.png";
import style from "./profile.module.css";

function Profile(props) {
  return (
    <div className={style.profileContainer}>
      <div className={style.title}>
        {props && (
        <h1 className={style.userName}>Hi, {props.user.name}</h1>
        )}
        <p className={style.message}>Let´s make this day productive</p>
      </div>
      <div className="bgUser">
        <svg
          width="65"
          height="65"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.mask}
        >
          <circle
            id="Mask"
            cx="27"
            cy="27"
            r="27"
            fill="#FF9F41"
            className={style.circle}
          />
          <foreignObject
            x="4"
            y="8"
            width="46"
            height="46"
            className={style.imgUser}
          >
            <img src={userImg} alt="User" />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export default Profile;
