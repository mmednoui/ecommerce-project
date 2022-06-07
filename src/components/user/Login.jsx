import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <h1>SIGN IN</h1>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>LOGIN</button>
          <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
