// home page with login form

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="home">
      <div>
        HOME/LOGIN PAGE
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default Login;
