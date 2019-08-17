import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Fibonacci extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      result: [],
      error: ""
    };
  }

  // Event update the react state when user types
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  calculate = () => {
    const value = this.state.amount;
    const result = math.fibonacciSequence(value);

    // Remove last element
    result.pop();

    const joinComma = result.join();

    return this.setState({
      result: joinComma
    });
  };

  render() {
    const { amount, result } = this.state;

    return (
      <FormComponent
        title="Calculator Fibbonacci"
        placeholder="Please input fibbonaci number. Ex: 4 = 0, 1, 1, 2"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.calculate}
      />
    );
  }
}

export default Fibonacci;
