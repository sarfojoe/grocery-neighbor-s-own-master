// home page with registration form

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      HOME/REGISTER PAGE
      <Link to={"/register"}>Resgister</Link>
    </div>
  );
};

export default Register;
