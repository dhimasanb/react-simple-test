import React from "react";
import { Layout, Icon } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Addition from "./Addition";
import Fibonacci from "./Fibonacci";
import Multiplication from "./Multiplication";
import Prime from "./Prime";

const App = () => {
  return (
    <Layout className="app">
      <Layout.Content>
        <div className="box">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/addition" component={Addition} />
              <Route path="/multiplication" component={Multiplication} />
              <Route path="/fibonacci" component={Fibonacci} />
              <Route path="/prime" component={Prime} />
            </Switch>
          </BrowserRouter>
        </div>
        <Layout.Footer className="footer">
          <Icon type="code" /> with <Icon type="heart" /> by
          <a href="https://github.com/dhimasanb"> @dhimasanb</a>
        </Layout.Footer>
      </Layout.Content>
    </Layout>
  );
};

export default App;
