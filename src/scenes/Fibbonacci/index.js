import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Fibbonacci extends Component {
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
    const result = math.fibonacciSequence(value);

    console.log("result", result);

    // Remove last element
    const resultArray = result.slice(0, -1);

    console.log("resultArray", resultArray);

    return this.setState({
      resultArray
    });
  };

  render() {
    const { amount, result, error } = this.state;

    return (
      <FormComponent
        title="Calculator Fibbonacci"
        placeholder="Please input addition number :)"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.handleKeyPressEnter}
      />
    );
  }
}

export default Fibbonacci;
