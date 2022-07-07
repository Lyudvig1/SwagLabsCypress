const password = Cypress.env("PASSWORD");
Cypress.Commands.add("Login", (username) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.userNameField).should("be.visible").type(username);
    cy.get(el.passwordInput).should("be.visible").type(password);
    cy.get(el.logInBtn).should("be.visible").click();
  });
});
