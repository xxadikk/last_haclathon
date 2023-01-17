import React from "react";
import Home from "../Home/Home";
import HomeCard from "../Home/HomeCard";
import HomeDescription from "../Home/HomeDescription";
import HomeSteper from "../Home/HomeStepr";
import "../Home/css/HomeCard.css";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Home />

      <Box id="alfa">
        <HomeDescription />
        <HomeCard />
        <HomeSteper />
      </Box>
    </>
  );
};

export default HomePage;
