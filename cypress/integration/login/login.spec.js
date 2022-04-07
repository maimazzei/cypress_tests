/// <reference types="cypress" />
describe('tests de login', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    })

it('valid user can login', () => {


cy.get('#username').type('tomsmith')
cy.get('#password').type('SuperSecretPassword!')
cy.get('.fa').click()

cy.get('#flash').contains('You logged into a secure area!')
})


it.skip('invalid user can not login', () => {

    
    cy.get('#username').type('pepe')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    
    cy.get('#flash').contains('Your username is invalid!')
    })


    it('invalid upasword can not login', () => {

        
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('`pepe!')
        cy.get('.fa').click()
        
        cy.get('#flash').contains('Your password is invalid!')
        })
    })