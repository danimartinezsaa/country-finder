import { checkHomePage, checkRegionPage, clickBackButton, clickListItem } from '../support/app.po';

describe('Given country-finder', () => {
  before(() => cy.visit('/'));

  it('should display "select the region" message', () => {
    checkHomePage();
    cy.get('[data-test=continents]')
  });

  describe('Given the user clicks in a region', () => {

    before(() => {
      clickListItem();
    });

    it('when the navigation finish then should see the region info and his countries', () => {
      checkRegionPage();
    });

    describe('Given the user clicks in a country', () => {

      before(() => {
        clickListItem();
      });

      it('when the navigation finish then should see the country info', () => {
        cy.get('[data-test=country-info]');
      });

      describe('Given the user clicks the back button', () => {
        before(() => {
          clickBackButton();
        })

        it ('when the navigation finish then should return to region info', () => {
          checkRegionPage();
        });
      })
    });
  });
});
