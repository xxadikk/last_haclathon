import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "../Restaurants/RestaurantsCard.css";
import { useRestaurants } from "../context/restaurantsContext";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const { deleteProduct } = useRestaurants();
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <Box id="card">
      <Card
        onClick={() => navigate(`/restaurant/${item.id}`)}
        sx={{ maxWidth: "320px", borderRadius: "5% 5% 5% 5%" }}
      >
        <CardActionArea>
          <Typography
            id="text"
            sx={{
              margin: "0",
              backgroundColor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontSize: "250%",
            }}
            gutterBottom
            variant="h1"
          >
            {item.title}
          </Typography>
          <div id="line"></div>
          {item.image ? (
            <CardMedia id="cardRest" image={item.image} alt={item.title} />
          ) : (
            <CardMedia />
          )}
          <div id="line"></div>
          <CardContent id="one">
            <Typography
              id="text_dep"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "130%",
                color: "white",
              }}
              gutterBottom
            >
              {item.description}
            </Typography>
            <Typography
              id="price"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                margin: "0",
              }}
              gutterBottom
            >
              Рейтинг: {item.rating}
            </Typography>
            <Typography
              id="price"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                margin: "0",
              }}
              gutterBottom
            >
              Кухня:{item.cuisine}
            </Typography>
            <Typography
              id="price"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                margin: "0",
              }}
              gutterBottom
            >
              Время работы: {item.work_time}
            </Typography>
            <Typography
              id="price"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                margin: "0",
              }}
              gutterBottom
            >
              Адрес: {item.address}
            </Typography>
          </CardContent>

          <div id="line2"></div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "black",
            }}
          >
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </Button>
            <Button>
              <BorderColorIcon />
            </Button>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
}
