describe('Főoldal teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('h1').should('have.text','Felhasználók kezelése');
    cy.get('button').should('have.text','Start');
    cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-1 > a').should('have.text','Users');
    cy.get('a').should('contains.text','Users');
    cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-none > ul > li:nth-child(1) > a').should('have.text','Login')
    cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-none > ul > li:nth-child(2) > a').should('have.text','Register')

    ////*[@id="root"]/div/div[1]/div[1]/a
  })
})