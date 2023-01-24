import { Alert, Box, Button, } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{width: "100%", height: "300px", padding: "200px 0 0 0",}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center",}}>
            <Alert sx={{width: "60%", display: 'flex', justifyContent: "center",}}  color="info">
            <p style={{width: "80%"}}>
            На вашу почту отправлена ссылка
            для подтверждения,
            после подтверждения нажмите на кнопку "Подтвердил"
            </p>
    </Alert>
    <Button onClick={()=>navigate("/login")}   sx={{margin: "20px 0 0 0", borderRadius: "10px",}} variant= "outlined">Подтвердил</Button>
            </Box>
        </Box>
    );
};

export default Confirm;