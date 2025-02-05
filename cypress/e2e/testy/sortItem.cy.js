import loginPage from '../../pages/LoginPage';
import homePage from '../../pages/HomePage';

describe('Sorting Items', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('[TC-6] Sorting', () => {
    loginPage.loginWithCorrectData();
    homePage.sortingByName_AZ();
    homePage.sortingByName_ZA();
    homePage.sortingByPrice_HighToLow();
    homePage.sortingByPrice_LowToHigh();
  });
});
