import React, { Component } from "react";
import * as math from "../../utils/math";
import FormComponent from "../../components/Form";

class Addition extends Component {
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
    const result = math.addition(value);

    return this.setState({
      result
    });
  };

  render() {
    const { amount, result } = this.state;

    return (
      <FormComponent
        title={null}
        placeholder="Please input addition number. Ex: 4,1 = 5"
        value={amount}
        onClick={() => this.calculate()}
        result={result}
        handleChange={this.handleChange("amount")}
        handleKeyPressEnter={this.calculate}
      />
    );
  }
}

export default Addition;
