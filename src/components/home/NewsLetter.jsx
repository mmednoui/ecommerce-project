import { Send } from "@mui/icons-material";
import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products</p>
      <div className="newsletter_input">
        <input type="text" placeholder="Your Email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
