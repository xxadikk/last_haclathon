import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "../Products/ProductCard.css";

export default function ProductCard() {
  return (
    <Box id="card">
      <Card sx={{ maxWidth: "320px", borderRadius: "20% 20% 0 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190px"
            image="https://www.nicepng.com/png/full/848-8485548_queen-of-my-kitchen-png.png"
            alt="not product"
          />
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Комбо бургер
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              gutterBottom
              variant="з"
              component="div"
            >
              Блюда из мяса – салата, и фрукт, десерт 220 г
            </Typography>
            <Typography
              sx={{ color: "red" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              429 com
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="div">
              category
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
