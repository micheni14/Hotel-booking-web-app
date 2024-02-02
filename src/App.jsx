import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Populars from "./components/SpecialOffers";
import Banner from "./components/Banner";
import SpecialOffers from "./components/Populars";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Navbar/>
        </Routes>
    </Router> */}
      <Navbar />
      <Header />
      <Banner />
      <SpecialOffers />
      <Populars />
      <About />
      <Footer />
    </div>
  );
};

export default App;
