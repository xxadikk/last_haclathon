import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import RestaurantsPage from "./components/pages/RestaurantsPage";
import AddRestaurants from "./components/Restaurants/AddRestaurants";

const Routing = () => {
  const PRIVAT_PAGES = [
    {
      link: "/restaurants",
      element: <RestaurantsPage />,
      id: 1,
    },
  ];
  const PUBLIC_PAGES = [
    {
      link: "/about",
      element: <AboutUs />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/add",
      element: <AddRestaurants />,
      id: 5,
    }
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} key={page.id} element={page.element} />
      ))}
      {PRIVAT_PAGES.map((pr_page) => (
        <Route path={pr_page.link} key={pr_page.id} element={pr_page.element} />
      ))}
    </Routes>
  );
};

export default Routing;
