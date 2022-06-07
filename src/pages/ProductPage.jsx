import React from "react";
import Announcement from "../components/home/header/Announcement";
import Navbar from "../components/home/header/Navbar";
import NewsLetter from "../components/home/newsletter/NewsLetter";
import Footer from "../components/home/footer/Footer";
import ProductDetail from "../components/product/ProductDetail";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <ProductDetail />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
