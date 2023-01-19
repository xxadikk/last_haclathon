import { Box, createTheme, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <div>
      <div>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px ",
            }}
          >
            <img
              style={{
                maxWidth: "70%",
                borderRadius: "20px",
                [theme.breakpoints.down("sm")]: {
                  width: "50%",
                },
              }}
              src="https://alterainvest.ru/upload/iblock/5a4/5a4e826079df3bbd1de03e5736eeb86e.jpg"
              alt="his photo"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "5%",
              [theme.breakpoints.down("sm")]: {
                height: "250px",
              },
            }}
          >
            <Typography
              sx={{
                maxWidth: "70%",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                },
              }}
            >
              На самом деле, у меня давно появилась идея ресторана, который
              приезжает к вам домой. И базируется она на трех вещах. Первое –
              как ни крути, а огромные многоэтажки за последние 10-20 лет
              сформировали у людей понятие дома. Когда ты ждал свою отдельную
              квартиру долго и дождался, тебе хочется время дома проводить. Я,
              например, рос в 90-е в коммуналке и мне все время хотелось свалить
              из дома куда-то, но когда у людей есть отдельное жилье – они хотят
              остаться дома. Вторая вещь – людям дорого каждый день есть в
              ресторане, это очевидно. Третья – даже такие консерваторы, как я,
              переходят на какие-то онлайн-сервисы, вместо офлайна. Исходя из
              всего этого появилась идея прийти в гости к людям, дав цену на еду
              ниже ресторанной и предложить какие-то сервисы из офлайна онлайн.
            </Typography>
          </Box>

          {/* второй бокс */}
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <Box>
                <img
                  style={{ maxWidth: "90%", borderRadius: "20px" }}
                  src="https://barashek.kg/wp-content/uploads/2022/08/photo_2022-06-25_18-54-29-600x600.jpg"
                  alt="err"
                />
              </Box>

              <Box>
                <img
                  style={{ maxWidth: "90%", borderRadius: "20px" }}
                  src="https://barashek.kg/wp-content/uploads/2021/06/photo_2022-05-29_13-02-51-600x600.jpg"
                  alt="err"
                />
              </Box>
            </Box>
          </div>

          {/* 3 box */}
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "9%",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "10px",
                  display: "none",
                },
              }}
            >
              <Typography
                sx={{
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Ресторан культовое место для гурманов нашего города и гостей
                Бишкека. Мы собрали все самое лучшее, что может отражать
                истинное радушное гостеприимство: современный интерьер в
                сочетании дерева и зеркал, располагает к безмятежному и уютному
                времяпрепровождению; вкусные блюда не только из барашка, а также
                свежей телятины или охлажденной рыбы; внимательный сервис
                отличается особенным трепетом и уважением к каждому гостю.
              </Typography>
              <img
                style={{
                  maxWidth: "20%",
                  [theme.breakpoints.down("md")]: {
                    width: "15%",
                  },
                }}
                src="123456789"
                alt=""
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "5%",
                width: "100%",
              }}
            >
              <img
                style={{ maxWidth: "50%", borderRadius: "20px" }}
                src="https://www.ixbt.com/img/x780/n1/news/2021/1/4/6_large.png"
                alt=""
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "5%",
              }}
            >
              <Typography
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0px",
                  },
                  maxWidth: "80%",
                  textAlign: "center",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "%",
                  },
                }}
              >
                Технически онлайн-ресторан – это доставка плюс интертеймент, в
                идеале для меня эдьютеймент, то есть не просто развлекательная
                история, но и развивающая. Но по большому счету, суть в том, что
                ресторан перестает быть физической локацией – он теперь там, где
                вы. И по большому счету Smoke BBQ Online – это формирование
                новой ресторанной концепции, где не только еда и напитки, но и
                уникальная атмосфера приходит в гости к людям. В ней, в том
                числе, предусмотрена только своя собственная доставка, которая и
                сама по себе конкурентное преимущество, и более прогнозируемый
                результат. Конечно, этот проект не поможет нам выжить сейчас,
                это отдельная история для будущего, которую мы будем развивать.
              </Typography>
            </Box>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "40%",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "50px",
              }}
            >
              <img
                style={{
                  width: "65%",
                  height: "60%",
                }}
                src="http://restopr.ru/wp-content/uploads/2015/09/svesvoi_sert2.jpg"
                alt="his photo"
              />
              <Typography
                sx={{
                  width: "100%",
                  marginTop: "5%",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                  },
                }}
              >
                123456789
              </Typography>
            </Box>
            <Box
              sx={{
                mb: "5%",
                display: "flex",
                justifyContent: "center",
                mt: "5%",
                ml: "30px",
                [theme.breakpoints.down("md")]: {
                  width: "40%",
                  mb: "10%",
                },
              }}
            >
              <img
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="https://sertiki.ru/userfiles/editor/maxfoto/1343_halyal-1.jpg"
                alt="err"
              />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AboutUs;
