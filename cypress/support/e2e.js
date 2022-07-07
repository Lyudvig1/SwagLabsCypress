import "./commands";
import "./login";

beforeEach(() => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.visit("/");
});
