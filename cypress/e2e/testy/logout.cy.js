/// <reference types="cypress" />

import loginPage from '../../pages/LoginPage';
import homePage from '../../pages/HomePage';

describe('Logout', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('[TC-4] Logout', () => {
    loginPage.loginWithCorrectData();
    homePage.openBurgerMenu();
    homePage.verifyMenuList();
    homePage.logout();
    loginPage.verifyLoginPage();
  });

  it('[TC-5] Saving card after logout', () => {
    loginPage.loginWithCorrectData();
    homePage.addToCardItem();
    homePage.verifyCountItemInTheCard();
    homePage.openBurgerMenu();
    homePage.logout();
    loginPage.verifyLoginPage();
    loginPage.loginWithCorrectData();
    homePage.verifyCountItemInTheCard();
  });
});
