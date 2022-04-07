/// <reference types="cypress" />

it('shifting content', () => {

    cy.visit('https://the-internet.herokuapp.com')

    cy.get(':nth-child(39) > a').click()

    cy.get('[href="/shifting_content/menu"]').click()


})