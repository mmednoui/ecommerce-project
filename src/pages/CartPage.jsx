import React from "react";
import Cart from "../components/cart/Cart";
import Footer from "../components/home/footer/Footer";
import Announcement from "../components/home/header/Announcement";
import Navbar from "../components/home/header/Navbar";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
