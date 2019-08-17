/* global cy, context :true */
context("Addition Scene", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When typing into the amount input 1, 2", function() {
    it("Click button calculate", () => {
      cy.get("#input-amount")
        .type("1,2")
        .should("have.value", "1,2");

      cy.get("#btn-calculate").click();

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "3");
    });

    it("Press enter key", () => {
      cy.get("#input-amount")
        .type("1,2")
        .should("have.value", "1,2");

      cy.get("#input-amount").type("{enter}");

      cy.get("#table-result")
        .find("#result")
        .should("have.text", "3");
    });
  });
});
