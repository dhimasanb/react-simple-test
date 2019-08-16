import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Addition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      error: "",
      result: []
    };
  }

  // Event update the react state when user types
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // Keypress event when user press a key 'enter
  handleKeyPressEnter = e => {
    if (e.key === "Enter") {
      this.calculate();
    }
  };

  calculate = () => {
    const value = this.state.amount;
    const result = math.addition(value);

    return this.setState({
      result
    });
  };

  render() {
    const { amount, result, error } = this.state;

    return (
      <FormComponent
        title="Calculator Addition"
        placeholder="Please input addition number"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.handleKeyPressEnter}
      />
    );
  }
}

export default Addition;
