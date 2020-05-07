import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Login";
import Register from "./Register";
import HomeHelper from "./HomeHelper";
import HomeCustomer from "./HomeCustomer";

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/helper" component={HomeHelper} />
              <Route path="/customer" component={HomeCustomer} />
            </Switch>
          </main>
        </Router>

        <Footer />
      </div>
    </div>
  );
};

export default App;
