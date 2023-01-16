import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../Home/Home.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://img4.goodfon.ru/wallpaper/nbig/5/9e/spagetti-pomidory-vtoroe-bliudo-eda.jpg",
    id: 1,
  },
  {
    label: "Bird",
    imgPath:
      "https://img4.goodfon.ru/wallpaper/nbig/4/bb/bliuda-skovoroda-miaso.jpg",
    id: 2,
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://img5.goodfon.ru/wallpaper/nbig/0/40/miaso-bliudo-khleb-spetsii-ovoshchi.jpg",
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
    <Box
      className="maincorus"
      id="carusel"
      sx={{ maxWidth: "100%", flexGrow: 1 }}
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
      <MobileStepper
        id="crs"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "red", width: "20px", height: "20px" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "red" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Home;
