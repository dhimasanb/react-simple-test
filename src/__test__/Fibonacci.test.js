import React from "react";
import { shallow } from "enzyme";
import Fibonacci from "../scenes/Fibonacci";
import FormComponent from "../components/Form";

describe("Fibonacci Scene", () => {
  const wrapper = shallow(<Fibonacci />);
  const formWrapper = wrapper.find(FormComponent).shallow();

  // Snapshot test
  it("Renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Initializes state test
  it("Initializes data in `state`", () => {
    expect(wrapper.state()).toEqual({
      amount: "",
      result: [],
      error: ""
    });
  });

  // Input and change state
  describe("When typing into the amount input 4", () => {
    const amount = "4";

    beforeEach(() => {
      formWrapper.find("#input-amount").simulate("change", {
        target: { value: amount }
      });
    });

    it("Updates the amount in `state`", () => {
      expect(wrapper.state().amount).toEqual(amount);
    });
  });

  // Click button test
  describe("Click button calculate", () => {
    const result = "0,1,1,2";

    beforeEach(() => formWrapper.find("#btn-calculate").simulate("click"));

    it(`Result is ${result}`, () => {
      expect(wrapper.state().result).toEqual(result);
    });
  });

  // Enter keypress test
  describe("Press enter key", () => {
    const result = "0,1,1,2";

    beforeEach(() =>
      formWrapper.find("#input-amount").simulate("keypress", { key: "Enter" })
    );

    it(`Result is ${result}`, () => {
      expect(wrapper.state().result).toEqual(result);
    });
  });
});
