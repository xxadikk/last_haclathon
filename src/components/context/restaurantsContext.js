import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const restaurantsContext = createContext();
export const useRestaurants = () => useContext(restaurantsContext);

const INIT_STATE = {
  restaurants: [],
  pages: 0,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        restaurants: action.payload.results,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://35.185.69.40/";

const RestaurantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  async function addProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}restaurant/`, newProduct, config);
      console.log(res);
      // navigate("/products");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  let values = {
    fetchByParams,
    addProduct,
  };

  return (
    <restaurantsContext.Provider value={values}>
      {children}
    </restaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;
