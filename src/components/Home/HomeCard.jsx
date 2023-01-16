import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HomeCard() {
  return (
    <Card
      sx={{
        maxWidth: 845,
        display: "flex",
        gap: "50px",
      }}
    >
      {/* // ! рестораны */}
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image="http://tophouserealty.com/uploads/images/cover/Buy-Restaurant-barcelona-spain-Top-House-Realty-4.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* // ! меню */}
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image="https://www.gastronom.ru/binfiles/images/20221202/b4258d35.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
