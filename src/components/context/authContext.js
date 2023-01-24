import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.185.69.40/account";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function register(formData) {
    try {
      const res = await axios.post(`${API}/register/`, formData);
      console.log(res);
      navigate("/confirm-page");
    } catch (error) {
      console.log(Object.values(error.response.data).flat());
      console.log(error);
      setError(Object.values(error.response.data).flat());
    }
  }

  async function login(formData, email) {
    try {
      const res = await axios.post(`${API}/token/`, formData);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      checkAuth();
    } catch (error) {
      console.log(error.response.data.detail);
      setError(error.response.data.detail);
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    try {
      const Authorization = `Bearer ${token.access}`;

      const res = await axios.post(
        `${API}/token/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: {
            Authorization,
          },
        }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let username = localStorage.getItem("username");

      setUser(username);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    navigate("/login");
  }

  const values = {
    user,
    error,
    setUser,
    register,
    login,
    checkAuth,
    logout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
