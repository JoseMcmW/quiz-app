import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../Components/profile/Profile";
import Statistics from "../../Components/statistics/Statistics";
import Categories from "../../Components/categories/Categories";
import style from "./home.module.css";

function Home() {
  const [userData, setUserData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const fetchDataUser = async () => {
    try {
      const response = await axios.get("https://quiz-7.com/profile.json");
      setUserData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchDataCategories = async () => {
    try {
      const response = await axios.get("https://quiz-7.com/categories.json");
      setCategoryData(response.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchDataUser();
    fetchDataCategories();
  }, []);

  return (
    <div className={style.container}>
      {userData && categoryData && (
        <>
          <Profile user={userData} />
          <Statistics user={userData} />
          <Categories categories={categoryData} />
        </>
      )}
    </div>
  );
}

export default Home;
