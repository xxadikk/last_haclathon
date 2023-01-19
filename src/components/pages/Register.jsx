import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


const theme = createTheme();

const  Register = () => {

  const navigate = useNavigate()
  
  const {register, error} = useAuth()


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [phone, setPhone] = useState("")
  
  
  function handleSaveEmail (){
      if(!email.trim() || !password.trim  || !passwordConfirm.trim() || !firstName.trim() || !lastName.trim() ){
          alert("Заполните поля")
          return;
      }
      let formData = new FormData()
      formData.append("email", email)
      formData.append("password", password)
      formData.append("password_confirm", passwordConfirm)
      formData.append("first_name", firstName)
      formData.append("last_name", lastName)
      formData.append("phone", phone)
      register(formData)
      console.log('worked');
  }

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Имя"
                  autoFocus
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Почта"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Подтвердите пароль"
                  type="password"
                  id="password"
                  value={passwordConfirm}
                  onChange={(e)=>setPasswordConfirm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Телефон"
                  id="phone"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Показать пароль"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSaveEmail}
            >
              зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={()=>navigate("/login")} variant="body2">
                  У вас есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;