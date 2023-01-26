import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useRestaurants } from "../context/restaurantsContext";

const SideBar = () => {
  const { fetchByParams } = useRestaurants();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3} sx={{ marginTop: "140px", position: "fixed" }}>
      <Paper sx={{ p: 3, width: "300px", height: "400px" }}>
        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          id="input-with-icon-textfield"
          label="Поиск..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Grid className="sideBar">
          <FormControl>
            <FormLabel sx={{ color: "red" }}>Продукты</FormLabel>
            <RadioGroup
              className="hoverProduct"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="Все продукты"
              />
              <FormControlLabel
                value="Комбо"
                control={<Radio />}
                label="Комбо"
              />
              <FormControlLabel
                value="Баскет"
                control={<Radio />}
                label="Баскет"
              />
              <FormControlLabel
                value="Напитки"
                control={<Radio />}
                label="Напитки"
              />
              <FormControlLabel
                value="Соусы"
                control={<Radio />}
                label="Соусы"
              />
              <FormControlLabel
                value="Бургеры"
                control={<Radio />}
                label="Бургеры"
              />
              <FormControlLabel
                value="Картошка Фри"
                control={<Radio />}
                label="Картошка Фри"
              />
              <FormControlLabel
                value="Твистер"
                control={<Radio />}
                label="Твистер"
              />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel sx={{ color: "red" }}>Цена</FormLabel>
            <RadioGroup
              className="hoverProduct"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="Все цены"
              />
              <FormControlLabel
                value="100"
                control={<Radio />}
                label=" до 100сом"
              />
              <FormControlLabel
                value="300"
                control={<Radio />}
                label=" до 300сом"
              />
              <FormControlLabel
                value="500"
                control={<Radio />}
                label=" до 500сом"
              />
              <FormControlLabel
                value="750"
                control={<Radio />}
                label=" до 650сом"
              />
              <FormControlLabel
                value="980"
                control={<Radio />}
                label=" до 780сом"
              />
              <FormControlLabel
                value="1120"
                control={<Radio />}
                label=" до 820сом"
              />
              <FormControlLabel
                value="1800"
                control={<Radio />}
                label=" до 1100сом"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;
