import React from "react";
import Home from "../Home/Home";
import HomeCard from "../Home/HomeCard";
import HomeDescription from "../Home/HomeDescription";
import HomeSteper from "../Home/HomeStepr";

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomeDescription />
      <HomeCard />
      <HomeSteper />
    </div>
  );
};

export default HomePage;
