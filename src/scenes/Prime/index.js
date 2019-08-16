import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Prime extends Component {
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
    const result = math.sieveOfEratosthenes(value);

    return this.setState({
      result
    });
  };

  render() {
    const { amount, result, error } = this.state;

    return (
      <FormComponent
        title="Calculator Prime"
        placeholder="Please input Prime number. Ex: 4,1 = 5"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.calculate}
      />
    );
  }
}

export default Prime;
