/// <reference types="cypress" />

import BasePage from './BasePage';

class HomePage extends BasePage {
  get burgerMenuButton() {
    return cy.get('#react-burger-menu-btn');
  }

  get menuList() {
    return cy.get('.bm-item-list');
  }

  get itemCard() {
    return cy.get('.inventory_item_description');
  }

  get shopingCartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }

  get shopingCartIcon() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  get logoutButton() {
    return cy.get('[data-test="logout-sidebar-link"]');
  }

  get homePageTitle() {
    return cy.get('[data-test="title"]');
  }

  get productName() {
    return cy.get('.inventory_item_name');
  }

  get productSortOption() {
    return cy.get('[data-test="product-sort-container"]');
  }

  get productPrice() {
    return cy.get('.inventory_item_price');
  }

  get twitterIcon() {
    return cy.get('[data-test="social-twitter"]');
  }

  get facebookIcon() {
    return cy.get('[data-test="social-facebook"]');
  }

  get linkedinIcon() {
    return cy.get('[data-test="social-linkedin"]');
  }

  openBurgerMenu() {
    this.burgerMenuButton.click();
  }

  logout() {
    this.logoutButton.click();
  }

  addToCardItem() {
    this.itemCard.then(($items) => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items)
        .eq(randomIndex)
        .find('.inventory_item_name')
        .invoke('text')
        .then((itemName) => {
          cy.wrap(itemName).as('selectedItemName');
          cy.wrap($items)
            .eq(randomIndex)
            .find('.inventory_item_price')
            .invoke('text')
            .then((itemPrice) => {
              cy.wrap(itemPrice).as('selectedItemPrice');
              cy.wrap($items).eq(randomIndex).find('.btn_inventory').click();
            });
        });
    });
  }

  selectSorting(option) {
    this.productSortOption.select(option);
  }

  getProductNames() {
    return this.productName.then(($items) => {
      return [...$items].map((el) => el.innerText);
    });
  }

  getProductPrices() {
    return this.productPrice.then(($items) => {
      return [...$items].map((el) => parseFloat(el.innerText.replace('$', '')));
    });
  }

  sortingByName_AZ() {
    this.selectSorting('az');
    return this.getProductNames().then((names) => {
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.equal(sortedNames);
    });
  }

  sortingByName_ZA() {
    this.selectSorting('za');
    return this.getProductNames().then((names) => {
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
      expect(names).to.deep.equal(sortedNames);
    });
  }

  sortingByPrice_LowToHigh() {
    this.selectSorting('lohi');
    return this.getProductPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  }

  sortingByPrice_HighToLow() {
    this.selectSorting('hilo');
    return this.getProductPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  }

  verifyMenuList() {
    this.menuList.find('.bm-item').should('have.length', 4);
  }

  verifyCountItemInTheCard() {
    this.shopingCartBadge.should('have.text', '1');
  }

  verifyHomePage() {
    this.homePageTitle.should('have.text', 'Products');
    cy.url().should('include', 'inventory.html');
    this.shopingCartIcon.should('exist').and('be.visible');
    this.shopingCartIcon.should('not.contain', '.shopping_cart_badge');
  }

  openShopingCart() {
    this.shopingCartIcon.click();
  }

  openTwitterLink() {
    this.twitterIcon
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'https://twitter.com/saucelabs');
    this.twitterIcon.click();
  }

  openFacebookLink() {
    this.facebookIcon
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    this.facebookIcon.click();
  }
  openLinkedinLink() {
    this.linkedinIcon
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    this.linkedinIcon.click();
  }
}

export default new HomePage();
