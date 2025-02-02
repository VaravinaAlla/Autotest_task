import LoginPage from '../../pages/LoginPage';
import CheckoutPage from '../../pages/CheckoutPage';
import HomePage from '../../pages/HomePage';

describe('Checkout', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('[TC-8] Valid ckeckout', () => {
    LoginPage.loginWithCorrectData();
    HomePage.addToCardItem();
    HomePage.verifyCountItemInTheCard();
    HomePage.openShopingCart();
    CheckoutPage.verifyProductNameInCart();
    CheckoutPage.clickCheckoutButton();
    CheckoutPage.verifyCheckoutPage();
    CheckoutPage.fillFormAndClickContinue();
    CheckoutPage.verifyProductNameAndPrice();
    CheckoutPage.clickFinishButton();
    CheckoutPage.verifyFinishPage();
    CheckoutPage.clickBackHomeButton();
    HomePage.verifyHomePage();
  });

  it('[TC-9] Checkout without product', () => {
    LoginPage.loginWithCorrectData();
    HomePage.openShopingCart();
    CheckoutPage.verifyCartIsEmpty();
    CheckoutPage.verifyCartPage();
    CheckoutPage.clickCheckoutButton();
  });
});
