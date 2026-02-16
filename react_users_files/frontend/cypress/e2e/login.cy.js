describe('Login teszt', () => {
  it('Login teszt', () => {
    cy.visit('http://localhost:5173')
    cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-none > ul > li:nth-child(1) > a').should('have.text','Login').click();
    cy.get('#username').type('user223');
    cy.get('#password').type('Titok_12');
    cy.get('button').click();
    cy.get('a').should('contains.text','Védett info');
  })
})