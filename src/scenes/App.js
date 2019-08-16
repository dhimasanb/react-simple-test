import React from "react";
import { Layout, Icon } from "antd";
import Fibbonacci from "./Fibbonacci";
import Addition from "./Addition";
import "./App.css";
import Multiplication from "./Multiplication";
import Prime from "./Prime";

const App = () => {
  return (
    <Layout className="app">
      <Layout.Content>
        <div className="box">
          <Prime />
        </div>
      </Layout.Content>
      <Layout.Footer className="footer">
        <Icon type="code" /> with <Icon type="heart" /> by
        <a href="https://github.com/dhimasanb"> @dhimasanb</a>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
