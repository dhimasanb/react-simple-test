import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Multiplication extends Component {
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
    const result = math.multiplication(value);

    return this.setState({
      result
    });
  };

  render() {
    const { amount, result } = this.state;

    return (
      <FormComponent
        title="Calculator Multiplication"
        placeholder="Please input multiplication number. Ex: 4,2 = 5"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.calculate}
      />
    );
  }
}

export default Multiplication;
