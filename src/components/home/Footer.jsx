import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <h1>LAMA.</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footer_left_socials">
          <div className="social_icon" style={{ backgroundColor: "#385999" }}>
            <Facebook />
          </div>
          <div className="social_icon" style={{ backgroundColor: "#e95950" }}>
            <Instagram />
          </div>
          <div className="social_icon" style={{ backgroundColor: "#0e76a8" }}>
            <LinkedIn />
          </div>
          <div className="social_icon" style={{ backgroundColor: "#55acee" }}>
            <Twitter />
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home </li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_contact">
          <Room style={{ marginRight: "0.6rem" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>{" "}
        <div className="footer_right_contact">
          <Phone style={{ marginRight: "0.6rem" }} /> +1 234 56 78
        </div>{" "}
        <div className="footer_right_contact">
          <MailOutline style={{ marginRight: "0.6rem" }} /> contact@lama.de
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
