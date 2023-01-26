import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurants } from '../context/restaurantsContext';

const RestaurantsDetails = () => {

  const { id } = useParams();
  const { oneProduct, getOneRestaurants } = useRestaurants();
  const [menu, setMenu] = useState([])
  const API = "http://35.185.69.40/"

  async function getMenu() {
    const { data } = await axios(`${API}post`);
    // console.log(data.results);
    let menush = await data.results.filter((item) => item.title_of_restourant == id)
    // console.log(menu);
    setMenu(menush)
  }
  useEffect(() => {
    getOneRestaurants(id);
    getMenu()
  }, []);
  return oneProduct ? (
    <div style={{ width: '100vw', marginTop: '100px' }}>
      <h2>{oneProduct && oneProduct.title}</h2>
      <h2>{oneProduct.description}</h2>
      <h2>{oneProduct.price}</h2>
      {oneProduct.image ? (
        <img src={oneProduct.image} width="250" height="250" alt="" />
      ) : (
        <h6>No images here</h6>
      )}
      <br />
      {menu?.map(item => (
        <div key={item.id}><img src={item.image} alt="" />
          <h5>{item.price}</h5>
        </div>
      ))}
     
      <input type="text" name="" id="" />
    </div>
  ) : (
    <div style={{ height: '100vh' }}>
      <CircularProgress />
    </div>
  );

};

export default RestaurantsDetails;