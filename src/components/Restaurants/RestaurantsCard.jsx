import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useRestaurants } from "../context/restaurantsContext";
import { useAuth } from "../context/authContext";

export default function ProductCard({ item }) {
  const { deleteProduct, toggleLike } = useRestaurants();
  const { user } = useAuth();

  const navigate = useNavigate();
 console.log(item)
  return (
    <Card sx={{ maxWidth: 345 }}>
      {item.image ? (
        <CardMedia sx={{ height: 140 }} image={item.image} alt={item.title} />
      ) : (
        <CardMedia sx={{ height: 140 }} />
      )}

      <CardContent onClick={() => navigate(`/products/${item.id}`)}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="error">
          {item.author}
        </Typography>
        
        <Typography variant="caption" color="blue">
          {item.rating}
        </Typography>
      </CardContent>
      <CardActions>
        {/* если пользователь является автором, то есть кнопка  */}
        {item.author ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </>
        ) : null}

        {/* ! если пользователь лайкнул пост, то отобразится заполненное сердце */}
        {item.liked_by_user ? (
          <>
            <FavoriteIcon
              onClick={() => {
                toggleLike(item.id);
              }}
            />
          </>
        ) : (
          <>
            <FavoriteBorderIcon
              onClick={() => {
                toggleLike(item.id);
              }}
            />
          </>
        )}
        {/* кол-во лайков */}
        {item.likes}
      </CardActions>
    </Card>
  );
}
