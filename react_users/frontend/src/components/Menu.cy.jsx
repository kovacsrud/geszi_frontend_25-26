import React from 'react'
import Menu from './Menu'

describe('<Menu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Menu />)
  })
})