export const getGreeting = () => cy.get('h1');
export const checkHomePage = () => cy.contains('¡Welcome to Country Finder! Select the region');
export const checkRegionPage = () => {
    cy.get('[data-test=region-name]');
    cy.get('[data-test=region-description]');
}
export const clickListItem = () => cy.get('[data-test=item]').first().click();
export const clickBackButton = () => cy.get('[data-test=back-button]').click();