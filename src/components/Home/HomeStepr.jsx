import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Как забронировать столик",
    description: `1
    Выберите ресторан. Прежде всего необходимо решить, какое заведение вы хотите посетить. Не все рестораны позволяют зарезервировать столик даже при высокой загрузке залов. Например, в небольших или новых ресторанах такая возможность может отсутствовать из-за недостаточного количества постоянных клиентов. Перед попыткой забронировать столик следует узнать правила работы заведения.`,
  },
  {
    label: "ШАГ 2",
    description:
      "Определите количество гостей. После выбора ресторана нужно решить, сколько людей придет на ужин вместе с вами. Время ожидания может зависеть от размеров компании. Например, если вас всего двое, то найти столик наверняка будет проще, однако задача усложнится, если планируется компания из 10 человек. Также количество людей может повлиять на то, насколько заранее нужно резервировать столик. [1] Даже если вы не уверены, сможет ли человек прийти, все равно резервируйте столик с учетом такого человека. Лучшие иметь свободное место за столом, чем искать еще одно кресло в полном заведении.",
  },
  {
    label: "ШАГ 3",
    description: `
    Выберите дату и время. Количество свободных место может зависеть от дня недели. Например, обычно проще зарезервировать столик на будний день, чем в выходные. Также проще отыскать свободный столик в “часы затишья”, чем в привычное “пиковое время” для завтраков, обедов или ужинов.
    Всегда планируйте запасную дату и время на случай, если в заведении не найдется свободных столиков в изначально выбранный день.`,
  },
];

export default function HomeSteper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <Box sx={{ maxWidth: 700 }}>
        <Stepper
          sx={{ display: "flex", justifyContent: "center" }}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">
                      Было ли вам полезно ?
                    </Typography>
                  ) : null
                }
              >
                <span>{step.label}</span>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 3 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "закрыть" : "далее"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      назад
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              <a style={{ textDecoration: "none" }} href="tel:+996703783830">
                ЗАБРОНИРОВАТЬ +996 (703) 78-38-30
              </a>
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Читать снова
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
