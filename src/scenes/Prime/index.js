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
    const result = math.findPrime(value);
    const joinComma = result.join();

    return this.setState({
      result: joinComma
    });
  };

  render() {
    const { amount, result } = this.state;

    return (
      <FormComponent
        title="Calculator Prime"
        placeholder="Please input prime number. Ex: 4 = 2, 3, 5, 7"
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
