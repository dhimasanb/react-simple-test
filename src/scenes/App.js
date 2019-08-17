import React from "react";
import { Layout, Icon } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Fibbonacci from "./Fibbonacci";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Prime from "./Prime";

const App = () => {
  return (
    <React.Fragment>
      <Layout className="app">
        <Layout.Content>
          <div className="box">
            <main>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/addition" component={Addition} />
                  <Route path="/multiplication" component={Multiplication} />
                  <Route path="/fibonacci" component={Fibbonacci} />
                  <Route path="/prime" component={Prime} />
                </Switch>
              </BrowserRouter>
            </main>
          </div>
        </Layout.Content>
        <Layout.Footer className="footer">
          <Icon type="code" /> with <Icon type="heart" /> by
          <a href="https://github.com/dhimasanb"> @dhimasanb</a>
        </Layout.Footer>
      </Layout>
    </React.Fragment>
  );
};

export default App;
