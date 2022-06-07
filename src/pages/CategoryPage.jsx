import React from "react";
import Footer from "../components/home/footer/Footer";
import Announcement from "../components/home/header/Announcement";
import Navbar from "../components/home/header/Navbar";
import NewsLetter from "../components/home/newsletter/NewsLetter";
import Products from "../components/home/products/Products";
import CategoryFilter from "../components/category/CategoryFilter";

const CategoryPage = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <CategoryFilter />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
