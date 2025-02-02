/// <reference types="cypress" />

import BasePage from './BasePage';

class LoginPage extends BasePage {
  get usernameField() {
    return cy.get('[data-test="username"]');
  }

  get passwordField() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  get loginWindow() {
    return cy.get('.login-box');
  }

  get errorCancelButton() {
    return cy.get('.error_icon');
  }

  get errorBorder() {
    return cy.get('.error-message-container');
  }

  open() {
    super.open('');
  }

  login(userName, password) {
    this.usernameField.type(userName);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  loginWithCorrectData() {
    this.usernameField.type(Cypress.env('USER_NAME'));
    this.passwordField.type(Cypress.env('USER_PASSWORD'));
    this.loginButton.click();
  }

  verifyFieldsHighlightedRed() {
    this.usernameField.should('have.class', 'error')
      .and('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
    this.errorCancelButton.should('be.visible');
  }

  verifyErrorMessage() {
    this.errorMessage.should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
  }

  verifyLoginPage() {
    this.loginWindow.should('exist').and('be.visible');
    this.usernameField.should('have.value', '');
    this.passwordField.should('have.value', '');
  }
}

export default new LoginPage();
