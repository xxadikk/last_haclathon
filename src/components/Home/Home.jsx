import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../Home/Home.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://img5.goodfon.ru/wallpaper/nbig/6/ad/miaso-pomidory-razdelochnaia-doska-doski-kusochki-porezannoe.jpg",
    id: 1,
  },
  {
    label: "Bird",
    imgPath:
      "https://img5.goodfon.ru/wallpaper/nbig/b/d4/eda-miaso-spetsii-pomidory-razdelochnaia-doska.jpg",
    id: 2,
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://img5.goodfon.ru/wallpaper/nbig/f/1e/miaso-svinina-spetsii.jpg",
    id: 3,
  },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Добро пожаловать
      </h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          className="maincorus"
          id="carusel"
          sx={{
            maxWidth: "70%",
            flexGrow: 1,
          }}
        >
          <AutoPlaySwipeableViews
            className="corusimg"
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
