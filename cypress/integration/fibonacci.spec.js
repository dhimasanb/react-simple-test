/* global cy, context :true */
context("Fibonacci Scene", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When typing into the amount input 4", function() {
    it("Calculate fibonacci and button calculate", () => {
      // Click button fibonacci
      cy.get("#btn-fibonacci").click();
      cy.get("#input-amount").should("be.visible");

      // Click button calculate
      cy.get("#input-amount")
        .type("4")
        .should("have.value", "4");

      cy.get("#btn-calculate").click();

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "0,1,1,2");
    });

    it("Calculate fibonacci and press enter key", () => {
      // Click button fibonacci
      cy.get("#btn-fibonacci").click();
      cy.get("#input-amount").should("be.visible");

      // Enter key button

      cy.get("#input-amount")
        .type("4")
        .should("have.value", "4");

      cy.get("#input-amount").type("{enter}");

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "0,1,1,2");
    });
  });
});
