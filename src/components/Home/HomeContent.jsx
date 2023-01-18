import { Box } from "@mui/material";
import React from "react";
import "../Home/css/HomeContent.css";

const HomeContent = () => {
  return (
    <Box id="t001__wrapper" data-hook-content="covercontent">
      <div
        id="t001__uptitle t-uptitle t-uptitle_sm"
        style={{
          textTransform: "uppercase",
          fontSize: "20px",
        }}
        field="subtitle"
      >
        #БИЗНЕС/КЕЙС Антивирус
      </div>
      <h1
        style={{
          fontSize: "580%",
        }}
        field="title"
      >
        Кейс дня: онлайн-ресторан
      </h1>
      <div
        id="t001__descr "
        style={{
          field: "descr",
          width: "80%",
          fontSize: "120%",
        }}
      >
        <p>
          Автор проекта Smoke BBQ Online (и совладелец петербургской ресторанной
          группы DreamTeam) Алексей Буров рассказывает РШ о том почему
          онлайн-ресторан – это не допуслуга по случаю, а рабочая концепция
          (внезапно наступившего) будущего
        </p>
      </div>
    </Box>
  );
};

export default HomeContent;
