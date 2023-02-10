import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ScrollButton from "./components/Scroll/ScrollButton";
import "./App.scss";
import Home from "./components/Home/Home";
import Rooms from "./components/Rooms/Rooms";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Rooms />
      <About />
      <Gallery />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default App;
