import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_wrapper_left">
          <span>EN</span>
          <div>
            <input type="text" />
            <Search style={{ color: "gray", fontSize: "1rem" }} />
          </div>
        </div>
        <div className="navbar_wrapper_center">
          <h1>LAMA.</h1>
        </div>
        <div className="navbar_wrapper_right">
          <div>Register</div>
          <div>Sign IN</div>
          <div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
