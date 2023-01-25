import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurants } from "../context/restaurantsContext";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const RestaurantsDetails = () => {
  const { id } = useParams();
  const { oneProduct, getOneRestaurants } = useRestaurants();
  const [menu, setMenu] = useState([]);
  const API = "http://35.185.69.40/";

  async function getMenu() {
    const { data } = await axios(`${API}post`);
    // console.log(data.results);
    let menush = await data.results.filter(
      (item) => item.title_of_restourant == id
    );
    // console.log(menu);
    setMenu(menush);
  }
  useEffect(() => {
    getOneRestaurants(id);
    getMenu();
  }, []);

  return oneProduct ? (
    <div style={{ width: "100%", marginTop: "100px" }}>
      {menu?.map((item) => (
        <Box id="card">
          <Card sx={{ maxWidth: "320px", borderRadius: "5% 5% 5% 5%" }}>
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
                {/* {item.type} */}
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
                  {item.price}
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
                  {item.post_category}
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
                  {item.work_time}
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
                  {item.title_of_restourant}
                </Typography>
              </CardContent>

              <div id="line2"></div>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                }}
              ></Box>
            </CardActionArea>
          </Card>
        </Box>
      ))}
      {/* {oneProduct.reviews.map((item) => (
        <div key={item.id}>
        <span>
        {item.text} {item.author}
        </span>
        {item.is_author ? <button>Delete</button> : null}
        </div>
      ))} */}
    </div>
  ) : (
    <div style={{ height: "100vh" }}>
      <CircularProgress />
    </div>
  );
};

export default RestaurantsDetails;
