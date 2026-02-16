describe('Főoldal elemi tesztekkel', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173');
  })

  it('Cím megjelenik', () => {
    cy.get('h1').should('have.text','Felhasználók kezelése')

  })
  it('A gomb szövege Start', () => {
   cy.get('button').should('have.text','Start');
  })
  it('Users menüpont megvan', () => {
   cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-1 > a').should('have.text','Users');
  })

  it('Login menüpont megvan', () => {
   cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-none > ul > li:nth-child(1) > a').should('have.text','Login')
  })

   it('Register menüpont megvan', () => {
   cy.get('#root > div > div.navbar.bg-sky-200.shadow-sm > div.flex-none > ul > li:nth-child(2) > a').should('have.text','Register')
  })

})
