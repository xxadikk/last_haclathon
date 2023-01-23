import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, CardMedia } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import "../ProductDetails/ProductDetails.css";
import Render from "./Render/Render";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function ProductDetails() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const rootRef = React.useRef(null);

  return (
    <div>
      <div>
        <Box
          sx={{
            paddingTop: "700px",
            flexGrow: 1,
            minWidth: "100%",
            transform: "translateZ(0)",
            "@media all and (-ms-high-contrast: none)": {
              display: "none",
            },
          }}
          ref={rootRef}
        >
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            sx={{
              display: "flex",
              p: "10%",
              alignItems: "center",
              justifyContent: "center",
            }}
            container={() => rootRef.current}
          >
            <Box
              id="blog"
              sx={{
                bgcolor: "background.paper",
                boxShadow: (theme) => theme.shadows[10],
                p: 3,
              }}
            >
              <div>
                <div id="back">
                  <ClearSharpIcon id="lop1" />
                  <div id="bacc">
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder id="lop2" />}
                      checkedIcon={<Favorite id="lop2" sx={{ color: "red" }} />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkIcon id="lop3" />}
                      checkedIcon={
                        <BookmarkIcon id="lop3" sx={{ color: "black" }} />
                      }
                    />
                  </div>
                </div>
              </div>
              <div id="container">
                <CardMedia
                  sx={{ width: "70%", borderRadius: "5%" }}
                  component="img"
                  height="190%"
                  image="https://assorti.kg/media/CACHE/images/uploads/restaurant/dishes/perets_farshirovannyj_2_QxlycYQ/fa3a95c771a5ffbe3f6b45e803eb9db8.jpg"
                  alt="not product"
                />
                <div id="text1">
                  <h2 id="name">Комбо бургер</h2>
                  <p id="par">Блюда из мяса – салата, и фрукт, десерт</p>
                  <div>
                    {/* //! reting start  */}
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        id="reting"
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2, mt: 1.3 }}>
                          {labels[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </Box>
                    {/* //? reting end */}
                    <div id="price-blog">
                      <h3 id="prices">Цена: 1234с.</h3>
                    </div>
                    <Render />
                    <div id="but">
                      <button id="but1"> ЗАКАЗАТЬ</button>
                      <button id="but2">В КОРЗИНУ</button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </Box>
      </div>
    </div>
  );
}

//  {/* //! like comm start */}

// {/* //? like comm end */}
