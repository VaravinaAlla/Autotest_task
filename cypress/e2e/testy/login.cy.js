/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import testData from '../../fixtures/credentials.json';
import HomePage from '../../pages/HomePage';

describe('Login tests with correct and incorrect data', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('[TC-1]Valid Login', () => {
    LoginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.correctPassword
    );
    HomePage.verifyHomePage();
  });

  it('[TC-2] Login with invalid password', () => {
    LoginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.incorrectPassword
    );
    LoginPage.verifyFieldsHighlightedRed();
    LoginPage.verifyErrorMessage();
  });

  it('[TC-3] Login with invalid login', () => {
    LoginPage.login(
      testData.userNames.incorrectUsername,
      testData.passwords.correctPassword
    );
    LoginPage.verifyFieldsHighlightedRed();
    LoginPage.verifyErrorMessage();
  });
});
