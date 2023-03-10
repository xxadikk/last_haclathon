import React from "react";
import AuthContextProvider from "./components/context/authContext";
import PostContextProvaider from "./components/context/postContext";
import RestaurantsContextProvider from "./components/context/restaurantsContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <PostContextProvaider>
                  <RestaurantsContextProvider>
        <Navbar />
        <Routing />
        <Footer />
        <Top />
        </RestaurantsContextProvider>
        </PostContextProvaider>

      </AuthContextProvider>
    </>
  );
};

export default App;
