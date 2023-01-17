import { Box } from "@mui/material";
import React from "react";
import "../Home/css/HomeDescription.css";

const HomeDescription = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        className="description"
        sx={{
          // marginTop: "100px",
          width: "60%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "0px",
        }}
      >
        <Box>
          <h2 style={{ fontSize: "100%" }}>
            "НАШИ" РЕСТОРАНЫ - ПОИСТИНЕ УНИКАЛЬНЫ
          </h2>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{ width: "80%", textAlign: "center", margin: "0 0 10px 0" }}
          >
            "НАШИ РЕСТОРАНЫ" - это современные интерьеры в сочетании дерева и
            зеркал, он располагает к безмятежному и уютному времяпрепровождению;
            вкусные блюда не только <br /> из барашка, но и из свежей телятины
            или охлажденной рыбы; внимательный сервис отличается особенным
            трепетом и уважением к каждому гостю!
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeDescription;