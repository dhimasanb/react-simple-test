import React from "react";
import { Input, Button, Typography, Row, Col, Divider } from "antd";
import PropTypes from "prop-types";
import TableResult from "./TableResult";

const FormComponent = props => {
  console.log("props", props);

  const {
    title,
    placeholder,
    value,
    onClick,
    result,
    handleChange,
    handleKeyPressEnter
  } = props;

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
            onKeyPress={handleKeyPressEnter}
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

      <Divider />

      <TableResult result={result} />
    </div>
  );
};

FormComponent.propTypes = {
  title: PropTypes.any,
  value: PropTypes.any,
  onClick: PropTypes.any,
  result: PropTypes.any,
  handleChange: PropTypes.any,
  handleKeyPressEnter: PropTypes.any
};

export default FormComponent;
