import React from "react";
import Announcement from "../components/home/header/Announcement";
import Categories from "../components/home/categories/Categories";
import Footer from "../components/home/footer/Footer";
import Navbar from "../components/home/header/Navbar";
import NewsLetter from "../components/home/newsletter/NewsLetter";
import Products from "../components/home/products/Products";
import Slider from "../components/home/slider/Slider";

const HomePage = () => {
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

export default HomePage;
