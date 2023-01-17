import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../Home/css/Home.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://podacha-blud.com/uploads/posts/2022-10/1665576913_13-podacha-blud-com-p-fud-foto-dlya-restorana-13.jpg",
    id: 1,
  },
  {
    label: "Bird",
    imgPath:
      "https://podacha-blud.com/uploads/posts/2022-10/1665576860_8-podacha-blud-com-p-fud-foto-dlya-restorana-8.jpg",
    id: 2,
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://slavapozdnyakov.ru/sites/default/files/photo/steik-s-ryabinoi.jpg",
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
    <Box sx={{ height: "300px", marginBottom: "400px" }}>
      <Box
        id="homep"
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box>
            <Box
              className="maincorus"
              id="carusel"
              sx={{
                maxWidth: "100%",
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
      </Box>
    </Box>
  );
}

export default Home;
