import React from 'react'
import Main from './Main'
import "../index.css"

describe('<Main />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />)
  })
})