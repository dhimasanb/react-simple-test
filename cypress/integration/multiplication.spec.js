/* global cy, context :true */
context("Multiplication Scene", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When typing into the amount input 1, 2", function() {
    it("Calculate multiplication and button calculate", () => {
      // Click button multiplication
      cy.get("#btn-multiplication").click();
      cy.get("#input-amount").should("be.visible");

      // Click button calculate
      cy.get("#input-amount")
        .type("1,2")
        .should("have.value", "1,2");

      cy.get("#btn-calculate").click();

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "2");
    });

    it("Calculate multiplication and press enter key", () => {
      // Click button multiplication
      cy.get("#btn-multiplication").click();
      cy.get("#input-amount").should("be.visible");

      // Enter key button

      cy.get("#input-amount")
        .type("1,2")
        .should("have.value", "1,2");

      cy.get("#input-amount").type("{enter}");

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "2");
    });
  });
});
