import React from "react";
import AuthContextProvider from "./components/context/authContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routing />
        <Footer />
        <Top />
      </AuthContextProvider>
    </>
  );
};

export default App;
