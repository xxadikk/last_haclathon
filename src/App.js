import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
      <Top />
    </>
  );
};

export default App;
