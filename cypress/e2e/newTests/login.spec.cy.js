const users = Cypress.env("USERS");
describe("Log in with all credentials", () => {
  it("Log in as a standard user ", () => {
    cy.Login(users["standard"]);
  });

  it("Log in as a locked user ", () => {
    cy.Login(users["locked"]);
  });

  it("Log in as a problem user ", () => {
    cy.Login(users["problem"]);
  });
  
  it("Log in as a performance user ", () => {
    cy.Login(users["performance"]);
  });
});
