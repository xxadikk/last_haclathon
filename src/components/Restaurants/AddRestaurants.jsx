import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useRestaurants } from "../context/restaurantsContext";

const API = "35.185.69.40/restaurant/";

const AddRestaurants = () => {
  // const { user } = useAuth();
  const { getCategories, categories, addProduct } = useRestaurants();

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    categories: "",
    work_time: "",
    rating: "",
    author: "",
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
    newProduct.append("rating", product.rating);
    newProduct.append("cuisine", product.cuisine);
    newProduct.append("image", product.image);

    newProduct.append("work_time", product.work_time);
    newProduct.append("address", product.address);
    newProduct.append("author", product.author);
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
          paddingBottom: "5%",
          paddingTop: "5%",
        }}
      >
        <Typography>Add new product</Typography>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          type="file"
          name="image"
          onChange={handleInp}
        />
        <TextField
          label="title"
          fullWidth
          variant="outlined"
          sx={{ m: 1 }}
          name="title"
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
          name="rating"
          onChange={handleInp}
        />
        <TextField
          label="author"
          fullWidth
          variant="outlined"
          sx={{ m: 1 }}
          name="author"
          onChange={handleInp}
        />
        <TextField
          label="cuisine"
          fullWidth
          variant="outlined"
          sx={{ m: 1 }}
          name="cuisine"
        />
        <TextField
          fullWidth
          variant="outlined"
          sx={{ m: 1 }}
          name="work_time"
          type="time"
          onChange={handleInp}
        />
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
