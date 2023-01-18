import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import "../MenuRegister/MenuRegister.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MenuRegister() {

    const navigate = useNavigate()

     const settings = [
         {
           name: "Регистрация",
           link: "/register",
           icon: (
             <ExitToAppIcon
               onClick={() => navigate("/register")}
               sx={{ height: "15px", width: "15px", marginLeft: "5px" }}
             />
           ),
           id: 1,
         },
         {
           name: "Войти",
           link: "/login",
           icon: (
             <LoginIcon
               onClick={() => navigate("/register")}
               sx={{ height: "15px", width: "15px", marginLeft: "5px" }}
             />
           ),
           id: 2
           ,
         },
    ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    id = "menu-login"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >  
        {settings.map((text) => (
          <ListItem key={text.id} disablePadding>
            <Box sx = {{display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: "10px 10px 0 0"}}>
            <Link id = "menu-login" to={text.link}>
              <ListItemText primary={text.name} />
            </Link>
            {text.icon}
            </Box>
          </ListItem>
        ))}
    </Box>
  );

  return (
    <Box>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <AccountCircleIcon  sx={{width: "49px", height: "40px",}}  onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}