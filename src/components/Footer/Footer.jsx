import { Box } from "@mui/system";
import React from "react";
import "../Footer/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  return (
    <div>
      <Box id="footer">
        <Box id="footer_text">
          <Box sx={{ color: "white" }} onClick={() => navigate("/about")}>
            О нас
          </Box>
          <Box id="footer_text1">Часто задаваемые вопросы</Box>
          <a
            id="footer_text1"
            href="https://mail.google.com/mail/u/0/?pli=1#inbox"
          >
            Админу
          </a>
        </Box>
        <Box id="footer_icon">
          <a href="https://instagram.com/xxadikk?igshid=YmMyMTA2M2Y=">
            <InstagramIcon />
          </a>
          <a href="#">
            {" "}
            <FacebookIcon />
          </a>
          <a href="#">
            <WhatsAppIcon />
          </a>
        </Box>
        <Box id="footer_end">
          <img
            id="footer_img"
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            alt="img"
          />
          <img
            id="footer_img1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
