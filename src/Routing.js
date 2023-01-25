import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Confirm from "./components/pages/Confirm";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import RestaurantsPage from "./components/pages/RestaurantsPage";
import AddRestaurants from "./components/Restaurants/AddRestaurants";
import RestaurantsCardPages from "../src/components/pages/RestaurantsCardPages";
import RestaurantsList from "../src/components/Restaurants/RestaurantsList"
import RestaurantsDetails from "./components/Restaurants/RestaurantsDetails";
import AddPost from "./components/Post/AddPost";

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
      link: "/confirm-page",
      element: <Confirm />,
      id: 5,
    },
    {
      link: "/add",
      element: <AddRestaurants />,
      id: 6,
    },
    {
      link: "/restourantsCard",
      element: <RestaurantsCardPages />,
      id: 7,
    },
    {
      link: "/restaurant/:id",
      element: <RestaurantsDetails />,
      id:8,
    },
    {
      link: "/add-post",
      element: <AddPost />,
      id:9,
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
