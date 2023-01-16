import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";

const Routing = () => {
  const PRIVAT_PAGES = [];
  const PUBLIC_PAGES = [
    {
      link: "/about",
      element: <AboutUs />,
      id: 1,
    },
    {
      link: "/home",
      element: <HomePage />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} key={page.id} element={page.element} />
      ))}
    </Routes>
  );
};

export default Routing;
