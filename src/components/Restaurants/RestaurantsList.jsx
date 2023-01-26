import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRestaurants } from "../context/restaurantsContext";
import RestaurantsCard from "./RestaurantsCard";

const RestaurantsList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, restaurants, pages } = useRestaurants();
  const navigate= useNavigate()

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
      <div style={{ backgroundColor: "red" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5%",
            flexWrap: "wrap",
          }}
        >
          {restaurants.map((item) => (
            <RestaurantsCard onClick={() => navigate(`/restaurant/${item.id}`)} item={item} key={item.id} />
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
    </div>
  );
};

export default RestaurantsList;
