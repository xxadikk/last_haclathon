import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import MenuRegister from "./MenuRegister/MenuRegister";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { user, checkAuth, logout } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  // console.log(user)

  const navigate = useNavigate();

  const pages = [
    {
      name: "Главная",
      link: "/",
      icon: (
        <HomeIcon
          onClick={() => navigate("/")}
          sx={{ height: "15px", width: "15px", marginLeft: "5px" }}
        />
      ),
      id: 1,
    },
    {
      name: "Рестораны",
      link: "/restaurants",
      icon: (
        <StorefrontIcon
          onClick={() => navigate("/restaurants")}
          sx={{ height: "15px", width: "15px", marginLeft: "5px" }}
        />
      ),
      id: 2,
    },
    {
      name: "О нас",
      link: "/about",
      icon: (
        <InfoIcon
          onClick={() => navigate("/about")}
          sx={{ height: "15px", width: "15px", marginLeft: "5px" }}
        />
      ),
      id: 3,
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box id="start-container" sx={{ width: "100%", padding: "0" }}>
      <AppBar id="appbar" position="fixed" sx={{ width: "100%" }}>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    id="burger-link"
                  >
                    <Link
                      to={page.link}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {page.name}
                    </Link>{" "}
                    {page.icon}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  gap: "0 50px",
                  marginRight: "10%",
                },
              }}
            >
              {pages.map((page) => (
                <div key={page.id}>
                  <MenuItem onClick={handleCloseNavMenu} id="block__link">
                    <Link
                      id="link"
                      to={page.link}
                      style={{ width: "100%", height: "100%" }}
                    >
                      {page.name}
                    </Link>
                    {page.icon}
                  </MenuItem>
                </div>
              ))}
            </Box>
            <Box onClick={()=> navigate("/add")}>admin</Box>
            <Box onClick={()=> navigate("/add-post")} style={{color:"red"}}>post</Box>
            {typeof user === "string" ? (<>
              <Typography>
                {user}
              </Typography>
            </>) : (null)}
            <MenuRegister logout={logout} user={user} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
