import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="product_circle"></div>
      <img src={item.img} alt="" />
      <div className="product_info">
        <div className="product_info-icon">
          <ShoppingCartOutlined />
        </div>{" "}
        <div className="product_info-icon">
          <SearchOutlined />
        </div>{" "}
        <div className="product_info-icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
