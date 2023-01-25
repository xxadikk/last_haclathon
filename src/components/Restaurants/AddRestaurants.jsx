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
          style={{ width: "36%" }}
          type="file"
          name="image"
          onChange={handleInp}
        />
        <TextField
          label="title"
          variant="outlined"
          sx={{ m: 1 }}
          name="title"
          onChange={handleInp}
        />
        <TextField
          label="Description"
          variant="outlined"
          sx={{ m: 1 }}
          name="description"
          onChange={handleInp}
        />
        <TextField
          label="author"
          variant="outlined"
          sx={{ m: 1 }}
          name="author"
          onChange={handleInp}
        />
        {/* <input type="num" /> */}
        <TextField
          style={{ width: "35.5%" }}
          label="rating"
          type="number"
          name="work_time"
          onChange={handleInp}
        />
        <TextField
          label="cuisine"
          variant="outlined"
          sx={{ m: 1 }}
          name="cuisine"
        />
        <TextField
          style={{ width: "35.5%" }}
          type="date"
          name="work_time"
          onChange={handleInp}
        />
        <TextField
          label="Address"
          variant="outlined"
          sx={{ m: 1 }}
          name="address"
          onChange={handleInp}
        />

        <Button
          sx={{ m: 1 }}
          variant="outlined"
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
