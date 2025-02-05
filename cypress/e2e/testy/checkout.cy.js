import loginPage from '../../pages/LoginPage';
import checkoutPage from '../../pages/CheckoutPage';
import homePage from '../../pages/HomePage';

describe('Checkout', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('[TC-8] Valid ckeckout', () => {
    loginPage.loginWithCorrectData();
    homePage.addToCardItem();
    homePage.verifyCountItemInTheCard();
    homePage.openShopingCart();
    checkoutPage.verifyProductNameInCart();
    checkoutPage.clickCheckoutButton();
    checkoutPage.verifyCheckoutPage();
    checkoutPage.fillFormAndClickContinue();
    checkoutPage.verifyProductNameAndPrice();
    checkoutPage.clickFinishButton();
    checkoutPage.verifyFinishPage();
    checkoutPage.clickBackHomeButton();
    homePage.verifyHomePage();
  });

  it('[TC-9] Checkout without product', () => {
    loginPage.loginWithCorrectData();
    homePage.openShopingCart();
    checkoutPage.verifyCartIsEmpty();
    checkoutPage.verifyCartPage();
    checkoutPage.clickCheckoutButton();
    checkoutPage.verifyCartPage();
    checkoutPage.verifyErrorMessage();
  });
});
