/// <reference types="cypress" />

import loginPage from '../../pages/LoginPage';
import testData from '../../fixtures/credentials.json';
import homePage from '../../pages/HomePage';

describe('Login tests with correct and incorrect data', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('[TC-1]Valid Login', () => {
    loginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.correctPassword
    );
    homePage.verifyHomePage();
  });

  it('[TC-2] Login with invalid password', () => {
    loginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.incorrectPassword
    );
    loginPage.verifyFieldsHighlightedRed();
    loginPage.verifyErrorMessage();
  });

  it('[TC-3] Login with invalid login', () => {
    loginPage.login(
      testData.userNames.incorrectUsername,
      testData.passwords.correctPassword
    );
    loginPage.verifyFieldsHighlightedRed();
    loginPage.verifyErrorMessage();
  });
});
