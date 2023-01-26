import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const restaurantsContext = createContext();
export const useRestaurants = () => useContext(restaurantsContext);


const INIT_STATE = {
  restaurants: [],
  pages: 0,
  categories: [],
  oneProduct: null
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_RESTAURANT":
      return {
        ...state,
        restaurants: action.payload.results,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ONE_RESTAURANT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://35.185.69.40/"

const RestaurantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate()

  async function getCategories() {
    try {
      const res = await axios(`${API}/category/list/`);
      dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  }

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
      navigate("/products");

    } catch (error) {
      console.log(error.response.data);
    }
  }

  // ! READ (отображение продуктов)
  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}restaurant/${window.location.search}`,
        config
      );
      dispatch({ type: "GET_RESTAURANT", payload: res.data });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // ! DELETE (TOKEN)
  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}restaurant/${id}`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  const editProduct = async ( id, newObj) =>{
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const Authorization = `Bearer ${token.access}`
        const config = {
            headers:{
                Authorization,
            }
        }
        const res = await axios.patch(`${API}resataurant/${id}/`,newObj,config)
        console.log(res);
        getProducts()
    } catch (error) {
        console.log(error);
    }
}

  async function getOneRestaurants(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}restaurant/${id}/`, config);
      // console.log(res);
      dispatch({ type: "GET_ONE_RESTAURANT", payload: res.data });
    } catch (error) {
      console.log(error);
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
    navigate(url)
  }

  let values = {
    fetchByParams,
    addProduct,
    getCategories,
    getProducts,
    restaurants: state.restaurants,
    deleteProduct,
    getOneRestaurants,
    oneProduct: state.oneProduct,
    editProduct
  }

  return (
    <restaurantsContext.Provider value={values}>
      {children}
    </restaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;