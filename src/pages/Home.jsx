import React from "react";
import Announcement from "../components/home/Announcement";
import Categories from "../components/home/Categories";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import NewsLetter from "../components/home/NewsLetter";
import Products from "../components/home/Products";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
