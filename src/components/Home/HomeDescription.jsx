import { Box } from "@mui/material";
import React from "react";

const HomeDescription = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ECD7B5",
        marginTop: "50px",
        marginLeft: "10%",
        width: "80%",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <h2>"НАШ" РЕСТОРАН - ПОИСТИНЕ УНИКАЛЬНОЕ МЕСТО</h2>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <p>
          "НАШ" РЕСТОРАН - это современный интерьер в сочетании дерева и зеркал,
          он располагает к безмятежному и уютному времяпрепровождению; вкусные
          блюда не только <br /> из барашка, но и из свежей телятины или
          охлажденной рыбы; внимательный сервис отличается особенным трепетом и
          уважением к каждому гостю
        </p>
      </Box>
    </Box>
  );
};

export default HomeDescription;
