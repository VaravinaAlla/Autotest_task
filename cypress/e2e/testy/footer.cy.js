/// <reference types="cypress" />

import loginPage from '../../pages/LoginPage';
import homePage from '../../pages/HomePage';

describe('Social media link in the footer', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('[TC-7] Footer Links', () => {
    loginPage.loginWithCorrectData();
    homePage.openTwitterLink();
    homePage.openFacebookLink();
    homePage.openLinkedinLink();
  });
});
