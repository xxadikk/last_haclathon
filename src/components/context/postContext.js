import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const postContext = createContext();
export const usePost = () => useContext(postContext);



const INIT_STATE = {
    post: [],
    restaurants:[],
    pages: 0,
    categories: [],
    onePost: null
};



function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_RESTAURANT":
            return {
                ...state,
                post: action.payload.results,
            };
            case "GET_CATEGORIES":
            return {
              ...state,
              categories: action.payload,
            };
          case "GET_ONE_RESTAURANT":
            return {
              ...state,
              onePost: action.payload,
            };
          default:
            return state;
        }
      }

      const API="http://35.185.69.40/"
      
const PostContextProvaider = ({children}) => {

        const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
const navigate=useNavigate()


async function addProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
        const Authorization = `Bearer ${token.access}`;
        const config = {
          headers: {
            Authorization,
          },
        };
      const res = await axios.post(`${API}post/`, newProduct, config);
      console.log(res);
      navigate("/products");
  
    } catch (error) {
      console.log(error.response.data);
    }
  }
  let values={addProduct}

    return (
    <postContext.Provider value={values}>
        {children}
    </postContext.Provider>
    );
};

export default PostContextProvaider;