import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

describe('Sorting Items', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('[TC-6] Sorting', () => {
    LoginPage.loginWithCorrectData();
    HomePage.sortingByName_AZ();
    HomePage.sortingByName_ZA();
    HomePage.sortingByPrice_HighToLow();
    HomePage.sortingByPrice_LowToHigh();
  });
});
