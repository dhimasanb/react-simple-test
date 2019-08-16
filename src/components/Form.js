import React, { PureComponent } from "react";
import { Input, Button, Typography, Row, Col } from "antd";
import PropTypes from "prop-types";
import TableResult from "./TableResult";

class FormComponent extends PureComponent {
  // Keypress event when user press a key 'enter
  handleKeyPressEnter = e => {
    if (e.key === "Enter") {
      console.log("enter gan");
      this.props.handleKeyPressEnter();
    }
  };

  render() {
    console.log("this.props", this.props);
    const {
      title,
      placeholder,
      value,
      onClick,
      result,
      handleChange
    } = this.props;

    return (
      <div style={{ textAlign: "center", paddingTop: "calc(50vh - 166px)" }}>
        <Row>
          <Col span={24}>
            <Typography.Title>{title || "Calculator"}</Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Input
              id={`input-${value}`}
              placeholder={placeholder}
              value={value}
              maxLength={12}
              onChange={handleChange}
              onKeyPress={this.handleKeyPressEnter}
            />
          </Col>
          <Col span={4}>
            <Button
              id="btn-calculate"
              type="primary"
              disabled={value === ""}
              onClick={onClick}
              icon="calculator"
            >
              Calculate
            </Button>
          </Col>
        </Row>

        <TableResult result={result} />
      </div>
    );
  }
}

FormComponent.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
  result: PropTypes.any,
  handleChange: PropTypes.func,
  handleKeyPressEnter: PropTypes.func
};

export default FormComponent;
