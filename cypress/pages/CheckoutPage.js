/// <reference types="cypress" />

import { generateRandomData } from '../support/dataGenerator';
import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  get firstName() {
    return cy.get('[data-test="firstName"]');
  }

  get lastName() {
    return cy.get('[data-test="lastName"]');
  }

  get zipCode() {
    return cy.get('[data-test="postalCode"]');
  }

  get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  get backHomeButton() {
    return cy.get('[data-test="finish"]');
  }

  get checkoutForm() {
    return cy.get('.checkout_info');
  }

  get cartList() {
    return cy.get('[data-test="cart-list"]');
  }

  get cartItem() {
    return cy.get('.cart_item');
  }

  get productInTheCart() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get cartQuantityLabel() {
    return cy.get('[data-test="cart-quantity-label"]');
  }

  get cartDescLabel() {
    return cy.get('[data-test="cart-desc-label"]');
  }

  get title() {
    return cy.get('[data-test="title"]');
  }

  get finishHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  get backHomeButton() {
    return cy.get('[data-test="back-to-products"]');
  }

  get errorMesage() {
    return cy.get('[data-test="error-message"]');
  }

  get selectedItemName() {
    return cy.get('@selectedItemName');
  }

  clickBackHomeButton() {
    this.backHomeButton.click();
  }

  clickFinishButton() {
    this.finishButton.click();
  }

  clickCheckoutButton() {
    this.checkoutButton.click();
  }

  fillFormAndClickContinue() {
    const data = generateRandomData();
    this.firstName.type(data.firstName);
    this.lastName.type(data.lastName);
    this.zipCode.type(data.zipCode);
    this.continueButton.click();
  }

  verifyCartIsEmpty() {
    this.cartList.should('exist').within(() => {
      this.cartQuantityLabel.should('have.text', 'QTY');
      this.cartDescLabel.should('have.text', 'Description');
    });

    this.cartList.children().should('have.length', 2);
  }

  verifyCartPage() {
    this.title.should('have.text', 'Your Cart');
  }

  verifyErrorMessage() {
    this.errorMesage.should('have.text', 'Cart is empty');
  }

  verifyCheckoutPage() {
    this.title.should('have.text', 'Checkout: Your Information');
    this.checkoutForm.should('be.visible');
  }

  verifyOverviewPage() {
    this.title.should('have.text', 'Checkout: Overview');
    this.cartList.should('be.visible');
  }

  verifyFinishPage() {
    this.title.should('have.text', 'Checkout: Complete!');
    this.finishHeader.contains('Thank you for your order!');
  }

  verifyProductNameInCart() {
    this.selectedItemName.then((selectedItemName) => {
      this.cartItem.contains(selectedItemName).should('be.visible');
    });
  }

  verifyProductNameAndPrice() {
    this.selectedItemName.then((selectedItemName) => {
      this.cartItem.contains(selectedItemName).should('be.visible');
    });
    cy.get('@selectedItemPrice').then((selectedItemPrice) => {
      this.cartItem.contains(selectedItemPrice).should('be.visible');
    });
  }
}
export default new CheckoutPage();
