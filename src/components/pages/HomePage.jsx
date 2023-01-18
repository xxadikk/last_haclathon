import React from "react";
import Home from "../Home/Home";
import HomeCard from "../Home/HomeCard";
import HomeDescription from "../Home/HomeDescription";
import HomeSteper from "../Home/HomeStepr";
import "../Home/css/HomeCard.css";
import { Box } from "@mui/material";
import HomeContent from "../Home/HomeContent";

const HomePage = () => {
  return (
    <Box>
      <Home />
      <HomeContent />
      <Box id="alfa">
        <HomeDescription />
        <HomeCard />
        <HomeSteper />
      </Box>
    </Box>
  );
};

export default HomePage;
