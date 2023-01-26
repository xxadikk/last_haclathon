import { Box, Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRestaurants } from '../context/restaurantsContext';

const EditRest = () => {
    const { editProduct, getOneRestaurants, oneProduct } = useRestaurants()
    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
      getOneRestaurants(id);
      setProduct(oneProduct);

  }, []);
    useEffect(() => {
        console.log(product);

      }, []);

    console.log(id)
    console.log(oneProduct);

    function handleSave() {
        let newProduct = new FormData(); // FormData для загрузки файла с компьютера
        newProduct.append("title", product.title);
        newProduct.append("description", product.description);
        newProduct.append("rating", product.rating);
        newProduct.append("cuisine", product.cuisine);
        newProduct.append("image", product.image);
        newProduct.append("work_time",product.work_time);
        newProduct.append("address",product.address);
        newProduct.append("author",product.author);
    editProduct(id, newProduct)
    navigate(`/restaurants/${id}`)
    }
  
    const navigate = useNavigate()
    return oneProduct && (
        <div>
        <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto" }}>
  <TextField
    value={product.title}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev, title: e.target.value }))
    }
    fullWidth
    id="outlined-basic"
    label="Title"
    variant="outlined"
    name="Title"
  />
  <TextField
    fullWidth
    id="outlined-basic"
    label="description"
    variant="outlined"
    name="Address"
    value={product.description}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev, description: e.target.value }))
    }
  />
  <TextField
    fullWidth
    id="outlined-basic"
    label="rating"
    variant="outlined"
    name="rating"
    value={product.rating}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev, rating: e.target.value }))
    }
  />

<TextField
    fullWidth
    id="outlined-basic"
    label="author"
    variant="outlined"
    name="author"
    value={product.author}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev,author: e.target.value }))
    }
  />
  <TextField
    fullWidth
    id="outlined-basic"
    label="cuisine"
    variant="outlined"
    name="cuisine"
    value={product.cuisine}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev,cuisine: e.target.value }))
    }
  />
  <TextField
    fullWidth
    id="outlined-basic"
    label="work_time"
    variant="time"
    name="work_time"
    value={product.work_time}
    onChange={(e) =>
        setProduct((prev) => ({ ...prev,work_time: e.target.value }))
    }
  />
    <TextField
    fullWidth
    type='file'
    id="outlined-basic"
    label="image"
    variant="outlined"
    name="image"
    onChange={(e) =>
        setProduct({...product, cover: e.target.files[0]})
    }
  />
  <Button
    onClick={() => {
     handleSave()
    }}
    variant="outlined"
    fullWidth
    size="large"
  >
    CREATE PRODUCT
  </Button>
</Box>
    </div>
    );
};

export default EditRest;