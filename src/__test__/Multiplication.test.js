import React from "react";
import { shallow } from "enzyme";
import Multiplication from "../scenes/Multiplication";
import FormComponent from "../components/Form";

describe("Multiplication Scene", () => {
  const wrapper = shallow(<Multiplication />);
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
  describe("When typing into the amount input 1,2", () => {
    const amount = "1, 2";

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
    const result = 2;

    beforeEach(() => formWrapper.find("#btn-calculate").simulate("click"));

    it(`Result is ${result}`, () => {
      expect(wrapper.state().result).toEqual(result);
    });
  });

  // Enter keypress test
  describe("Press enter key", () => {
    const result = 2;

    beforeEach(() =>
      formWrapper.find("#input-amount").simulate("keypress", { key: "Enter" })
    );

    it(`Result is ${result}`, () => {
      expect(wrapper.state().result).toEqual(result);
    });
  });
});
