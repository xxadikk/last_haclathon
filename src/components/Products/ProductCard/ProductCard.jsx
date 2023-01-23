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
import "../ProductCard/ProductCard.css";

export default function ProductCard() {
  return (
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
            Комбо бургер
          </Typography>
          <div id="line"></div>
          <CardMedia
            component="img"
            height="190px"
            image="https://assorti.kg/media/CACHE/images/uploads/restaurant/dishes/perets_farshirovannyj_2_QxlycYQ/fa3a95c771a5ffbe3f6b45e803eb9db8.jpg"
            alt="not product"
          />
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
              Блюда из мяса – салата, и фрукт, десерт
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
              Цена: 429 сом
            </Typography>
          </CardContent>
          {/* <Box
            sx={{
              backgroundColor: "pink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button sx={{ color: "black" }}>ЗАКАЗАТЬ</Button>
          </Box> */}

          <div id="line2"></div>

          {/* //! user panel */}

          <Box
            id="insta"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "black",
              paddingRight: "5%",
              paddingBottom: "2%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5%",
                paddingLeft: "5%",
              }}
            >
              <FavoriteBorderIcon sx={{ color: "white" }} />
              <ChatBubbleOutlineIcon sx={{ color: "white" }} />
              {/* <SendIcon /> */}
              <ShareOutlinedIcon sx={{ color: "white" }} />
            </Box>
            <BookmarkBorderIcon sx={{ color: "white" }} />
          </Box>

          {/* //? user panel end */}

          {/* //! Admin panel */}

          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button>
              <DeleteIcon />
            </Button>
            <Button>
              <BorderColorIcon />
            </Button>
          </Box> */}
          {/* //? Admin panel end */}
        </CardActionArea>
      </Card>
    </Box>
  );
}
