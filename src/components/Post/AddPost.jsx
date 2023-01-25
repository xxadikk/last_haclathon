import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { usePost } from '../context/postContext';

const AddPost = () => {
    const { addProduct } = usePost();

    const API= "http://35.185.69.40/"


    const [product, setProduct] = useState({
        title: "",
        description: "",
        price:"",
        post_category: "",
        title_of_restourant: "",
        type: "",
       
    
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
        newProduct.append("price", product.price);
        newProduct.append("post_category", product.post_category);
        newProduct.append("image", product.image);
        newProduct.append("type",product.type);
        newProduct.append("title_of_restourant",product.title_of_restourant);
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
          <input type="file" name="image" onChange={handleInp} />
             <TextField
            label="title"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="title"  
            onChange={handleInp}
          />
             <TextField
            label="description"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="description"  
            onChange={handleInp}
          />
           <TextField
            label="price"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="price"  
            onChange={handleInp}
          />
           <TextField
            label="post_category"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="post_category"  
            onChange={handleInp}
          />
         
          <TextField
            label="title_of_restourant"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="title_of_restourant"  
            onChange={handleInp}
          />
         {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    {restaurants?.map((item)=>(
 <MenuItem value={item.id}>{item.title}</MenuItem>
    ))}
   
    
  </Select>
</FormControl> */}
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

export default AddPost;