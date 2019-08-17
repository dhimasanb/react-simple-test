import React, { PureComponent, Component } from "react";
import { Layout, Button, Row, Col, Typography } from "antd";
import { NavLink } from "react-router-dom";
import Addition from "../Addition";
import Multiplication from "../Multiplication";
import Fibonacci from "../Fibonacci";
import Prime from "../Prime";
import Menu from "./components/Menu";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      currentComponent: "Addition"
    };
  }

  renderComponent(currentComponent) {
    const components = {
      Addition: <Addition />,
      Multiplication: <Multiplication />,
      Fibonacci: <Fibonacci />,
      Prime: <Prime />
    };

    return components[currentComponent];
  }

  setComponent = currentComponent => {
    this.setState({ currentComponent });
  };

  render() {
    return (
      <React.Fragment>
        <Layout className="app">
          <Layout.Content>
            <div className="box">
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "calc(50vh - 166px)"
                }}
              >
                <Row>
                  <Col span={24}>
                    <Typography.Title>{`${this.state.currentComponent} Calculator`}</Typography.Title>
                  </Col>
                </Row>
                <Menu selectButton={this.setComponent} />

                <Row>
                  <Col span={24}>
                    {this.renderComponent(this.state.currentComponent)}
                  </Col>
                </Row>
              </div>
            </div>
          </Layout.Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Home;
