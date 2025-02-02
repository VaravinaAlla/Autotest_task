/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

describe('Logout', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('[TC-4] Logout', () => {
    LoginPage.loginWithCorrectData();
    HomePage.openBurgerMenu();
    HomePage.verifyMenuList();
    HomePage.logout();
    LoginPage.verifyLoginPage();
  });

  it('[TC-5] Saving card after logout', () => {
    LoginPage.loginWithCorrectData();
    HomePage.addToCardItem();
    HomePage.verifyCountItemInTheCard();
    HomePage.openBurgerMenu();
    HomePage.logout();
    LoginPage.verifyLoginPage();
    LoginPage.loginWithCorrectData();
    HomePage.verifyCountItemInTheCard();
  });
});
