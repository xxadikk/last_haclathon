import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "../Home/css/HomeCard.css";

export default function HomeCard() {
  return (
    <Box
      sx={{
        padding: "0",
        margin: "50px 0 0 0",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-evenly",
        gap: "3%",
      }}
    >
      <Card
        sx={{
          textAlign: "center",
          maxWidth: 445,
          borderRadius: "50px 15px",
        }}
      >
        {/* // ! рестораны */}
        <CardActionArea>
          <CardMedia
            sx={{
              borderRadius: "15px",
            }}
            component="img"
            width="100"
            image="https://www.tokyo-city.ru/images/restorany/nevskiy71/foto017.jpg"
            alt="рестараны"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              РЕСТОРАНЫ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          textAlign: "center",
          maxWidth: 445,
          borderRadius: "15px 50px",
        }}
      >
        {/* // ! меню */}
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: "15px" }}
            component="img"
            width="100px"
            image="https://prof.thebull.ru/wp-content/uploads/sites/10/2022/12/%D0%A2%D0%B0%D1%80%D0%A2%D0%B0%D1%80-28.09-3.jpg"
            alt="меню"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              МЕНЮ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
