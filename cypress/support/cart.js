/// <reference types="Cypress" />
const util = require("../utils/util");
class Cart {
  getProductBtnIndex(index) {
    return cy.get(`.inventory_item:nth-child(${index}) button`);
  }

  getProductTitle(num) {
    return cy.get(`.inventory_item:nth-child(${num}) .inventory_item_name`);
  }

  cartIcon() {
    return cy.get(".shopping_cart_link");
  }
  addedProductEl() {
    return cy.get(".inventory_item_name");
  }

  removeBtn() {
    return cy.get(".cart_item_label button");
  }
  openMenu() {
    return cy.get("#react-burger-menu-btn");
  }
  getLogOutBtn() {
    return cy.get("#logout_sidebar_link");
  }
  getTitleText() {
    let number = util.productIndex;
    this.getProductTitle(number).then(($el) => {
      let txt = $el.text();
      cy.wrap(txt).as("productName");
    });
  }
  selectProduct() {
    let number = util.productIndex;
    this.getProductBtnIndex(number).click();
  }
  goToCart() {
    this.cartIcon().click();
  }
  addedProduct() {
    this.addedProductEl().then((el) => {
      let txt = el.text();
      cy.get("@productName").should("equal", txt);
    });
  }

  removeProduct() {
    let remove = this.removeBtn().click();
    cy.wait(2000);
    remove.should("not.exist");
    this.addedProductEl().should("not.exist");
  }
  logOut() {
    this.openMenu().click();
    this.getLogOutBtn().click();
    cy.url().should("eq", Cypress.env("BASE_URL"));
  }
}

module.exports = new Cart();
