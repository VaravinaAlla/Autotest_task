/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

describe('Social media link in the footer', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('[TC-7] Footer Links', () => {
    LoginPage.loginWithCorrectData();
    HomePage.openTwitterLink();
    HomePage.openFacebookLink();
    HomePage.openLinkedinLink();
  });
});
