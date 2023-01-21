import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddRestaurants = () => {


  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });




    return (
       <>
        <Box 
          sx={{
            width: "40vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px"
          }}
        >
          <Typography>Add new product</Typography>
             <TextField
            label="Title"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="Title"
                
          />
          <input type="file" />
             <TextField
            label="Description"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="description"
                
          />
          <input type="number" />
             <TextField
            label="Rating"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            type="number"
            name="number"
                
          />
            <TextField
            label="Cuisine"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="Cuisine"
                
          />
          </Box>
       </>
    );
};

export default AddRestaurants;