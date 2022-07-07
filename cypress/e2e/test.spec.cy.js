const cart = require("../support/cart");
const users = Cypress.env("USERS");
describe("E2E test Swag Labs website", () => {
  it("Add , check,remove product in cart and log out", () => {
    cy.Login(users["standard"]);
    cart.getTitleText();
    cart.selectProduct();
    cart.goToCart();
    cart.addedProduct();
    cart.removeProduct();
    cart.logOut();
  });
});
