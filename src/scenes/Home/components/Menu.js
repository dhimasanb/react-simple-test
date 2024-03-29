import React, { PureComponent } from "react";
import { Button, Row, Col } from "antd";

class Menu extends PureComponent {
  handleClick(category) {
    this.props.selectButton(category);
  }

  render() {
    return (
      <React.Fragment>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <div className="gutter-box">
                <Button.Group>
                  <Button
                    id="btn-addition"
                    type="primary"
                    shape="round"
                    onClick={() => this.handleClick("Addition")}
                  >
                    Addition
                  </Button>
                  <Button
                    id="btn-multiplication"
                    type="primary"
                    shape="round"
                    onClick={() => this.handleClick("Multiplication")}
                  >
                    Multiplication
                  </Button>
                  <Button
                    id="btn-fibonacci"
                    type="primary"
                    shape="round"
                    onClick={() => this.handleClick("Fibonacci")}
                  >
                    Fibonacci
                  </Button>
                  <Button
                    id="btn-prime"
                    type="primary"
                    shape="round"
                    onClick={() => this.handleClick("Prime")}
                  >
                    Prime
                  </Button>
                </Button.Group>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
