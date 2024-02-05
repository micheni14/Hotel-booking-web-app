import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Populars from "../components/Populars";
import SpecialOffers from "../components/SpecialOffers";
import Footer from "../components/Footer";
import About from "../components/About";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <Populars />
      <SpecialOffers />
      <About />
      <Footer />
    </>
  );
};

export default Home;
