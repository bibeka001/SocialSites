import React from "react";
// import Image from '../Image';
import Google from "../Image/google.jpg";
import Github from "../Image/github.jpg";
import Faceboook from "../Image/facebook.jpg";
const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            {/* <img src={Google} alt="" className="icon" /> */}
            Google
          </div>
          <div className="loginButton github">
            {/* <img src={Github} alt="" className="icon" /> */}
            Github
          </div>
          <div className="loginButton facebook">
            {/* <img src={Faceboook} alt="" className="icon" /> */}
            Facebook
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>

        <div className="right">
          <input type="text" placeholder="Username" className="username" />
          <input type="text" placeholder="Password" className="password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
