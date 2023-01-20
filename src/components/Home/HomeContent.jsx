import { Box } from "@mui/material";
import React from "react";
import "../Home/css/HomeContent.css";

const HomeContent = () => {
  return (
    <Box id="t001__wrapper" data-hook-content="covercontent">
      <div id="t001__uptitle" field="subtitle">
        #БИЗНЕС/КЕЙС Антивирус
      </div>
      <h1 id="zagol">Кейс дня: онлайн-ресторан</h1>
      <p id="t001__descr">
        Автор проекта Smoke BBQ Online (и совладелец петербургской ресторанной
        группы DreamTeam) Алексей Буров рассказывает РШ о том почему
        онлайн-ресторан – это не допуслуга по случаю, а рабочая концепция
        (внезапно наступившего)
      </p>
    </Box>
  );
};

export default HomeContent;
