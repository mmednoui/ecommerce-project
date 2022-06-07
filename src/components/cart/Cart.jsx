import { Add, Remove } from "@mui/icons-material";
import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="cart">
        <h1>YOUR BAG</h1>
        <div className="cart_top">
          <button style={{ backgroundColor: "transparent" }}>
            CONTINUE SHOPPING
          </button>
          <div className="cart_top_texts">
            <span>Shopping Bag (2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button
            style={{ backgroundColor: "black", color: "white", border: "none" }}
          >
            CHECKOUT NOW
          </button>
        </div>
        <div className="cart_bottom">
          <div className="bottom_info">
            <div className="productItem">
              <div className="product_detail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="product_detail_details">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className="product_color"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="price_detail">
                <div className="product_amount_container">
                  <Add />
                  <div className="product_amount">2</div>
                  <Remove />{" "}
                </div>
                <div className="product_price">$ 30</div>
              </div>
            </div>
            <hr />
            <div className="productItem">
              <div className="product_detail">
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <div className="product_detail_details">
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className="product_color"
                    style={{ backgroundColor: "gray" }}
                  ></div>
                  <span>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className="price_detail">
                <div className="product_amount_container">
                  <Add />
                  <div className="product_amount">2</div>
                  <Remove />{" "}
                </div>
                <div className="product_price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1>ORDER SUMMARY</h1>
            <div className="summary_item">
              <span className="summary_item_text">Subtotal</span>
              <span className="summary_item_price">$ 80</span>
            </div>
            <div className="summary_item">
              <span className="summary_item_text">Estimated Shipping</span>
              <span className="summary_item_price">$ 5.90</span>
            </div>
            <div className="summary_item">
              <span className="summary_item_text">Shipping Discount</span>
              <span className="summary_item_price">$ -5.90</span>
            </div>
            <div className="summary_item">
              <span
                className="summary_item_text"
                style={{ fontWeight: "500", fontSize: "24px" }}
              >
                Total
              </span>
              <span className="summary_item_price">$ 80</span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
