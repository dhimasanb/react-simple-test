/* global cy, context :true */
context("Prime Scene", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When typing into the amount input 4", function() {
    it("Calculate prime and button calculate", () => {
      // Click button prime
      cy.get("#btn-prime").click();
      cy.get("#input-amount").should("be.visible");

      // Click button calculate
      cy.get("#input-amount")
        .type("4")
        .should("have.value", "4");

      cy.get("#btn-calculate").click();

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "2,3,5,7");
    });

    it("Calculate prime and press enter key", () => {
      // Click button prime
      cy.get("#btn-prime").click();
      cy.get("#input-amount").should("be.visible");

      // Enter key button

      cy.get("#input-amount")
        .type("4")
        .should("have.value", "4");

      cy.get("#input-amount").type("{enter}");

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "2,3,5,7");
    });
  });
});
