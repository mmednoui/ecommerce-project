import { Add, Remove } from "@mui/icons-material";
import React from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetail_image">
        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
      </div>
      <div className="productDetail_info">
        <h1>Pants Jumpsuit</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </p>
        <span>$ 20</span>
        <div className="filter_container">
          <div className="filter">
            <span>Color</span>
            <div
              className="filter_color"
              style={{ backgroundColor: "tomato" }}
            ></div>
            <div
              className="filter_color"
              style={{ backgroundColor: "Black" }}
            ></div>
            <div
              className="filter_color"
              style={{ backgroundColor: "teal" }}
            ></div>
          </div>
          <div className="filter">
            <span>Size</span>
            <select className="filter_size">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
        <div className="add_container">
          <div className="amount_container">
            <Remove />
            <span className="amount">1</span>
            <Add />
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
