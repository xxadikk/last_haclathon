import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useRestaurants } from '../context/restaurantsContext';


const API = "35.185.69.40/restaurant/"

const AddRestaurants = () => {

  // const { user } = useAuth();
  const { getCategories, categories, addProduct } = useRestaurants();


  const [product, setProduct] = useState({
    title: "",
    description: "",
    raiting:"",
    category: "",
    work_time: "",

  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        // чтобы отправить картинку используют e.target.files (FileList)
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newProduct = new FormData(); // FormData для загрузки файла с компьютера
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.raiting);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    newProduct.append("work_time",product.work_time);
    addProduct(newProduct);
  }


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
          <input type="file" name="image" onChange={handleInp}/>
             <TextField
            label="Title"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="Title"  
            onChange={handleInp}
          />
             <TextField
            label="Description"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="description"
            onChange={handleInp}
          />
             <TextField
            label="Rating"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            type="number"
            name="raiting"
            onChange={handleInp}  
          />
          <input type="number" name="rating" />
            <TextField
            label="Cuisine"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="Cuisine"
                
          />
          <input type="date" onChange={handleInp} />
          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="address"
            onChange={handleInp}  
          />
          
             <Button
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              size="large"
              onClick={handleSave}
            >
              Add product
          </Button>
          </Box>
       </>
    );
};

export default AddRestaurants;