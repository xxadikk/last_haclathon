import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRestaurants } from "../context/restaurantsContext";
import RestaurantsCard from "./RestaurantsCard";

const RestaurantsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const { getProducts, restaurants, pages } = useRestaurants();
  
    useEffect(() => {
      getProducts();
    }, []);
  
    // следить за параметрами
    useEffect(() => {
      getProducts();
    }, [searchParams]);
  
    // следить за текущей страницей и менять searchParams
    useEffect(() => {
      setSearchParams({
        page: currentPage,
      });
    }, [currentPage]);
  
    return (
      <div>
        <Box>
          Products List
          {restaurants.map((item) => (
            <RestaurantsCard item={item} key={item.id} />
          ))}
        </Box>
        <Box>
          <Pagination
            variant="outlined"
            color="primary"
            count={pages}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
          />
        </Box>
      </div>
    );
  };

export default RestaurantsList;