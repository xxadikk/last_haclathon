import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer/>
      <Top />
    </>
  );
};

export default App;
