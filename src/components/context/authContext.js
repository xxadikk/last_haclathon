import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.185.69.40/account";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function register(formData) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/register/`, formData, config);
      console.log(res);
      //   navigate("/");
    } catch (error) {
      console.log(Object.values(error.response.data).flat());
      console.log(error);
      setError(Object.values(error.response.data).flat());
    }
  }

  const values = {
    user,
    error,
    setUser,
    register,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
