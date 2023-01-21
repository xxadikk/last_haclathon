import React, { createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const restaurantsContext = createContext();



export const useProducts = () => {
  return useContext(restaurantsContext);
};

const RestaurantsContextProvider = ({ children }) => {

  const location = useLocation();
const navigate=useNavigate()

    const fetchByParams = async (query, value) =>{
        const search = new URLSearchParams(location.search);
    
        if(value == "all"){
          search.delete(query);
        }else{
          search.set(query,value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url)
      }

      let values={
        fetchByParams,
      }

return (
    <restaurantsContext.Provider value={values}>
      {children}
    </restaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;