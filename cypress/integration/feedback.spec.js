/// <reference types="cypress" />

describe('Feedback form',() => {
    const data = require('../fixtures/data')

    data.forEach((item, index)=> {

        it(`${index + 1} - Submit Feedback form`, () => {

            cy.visit('http://zero.webappsecurity.com/feedback.html')

            cy.get('#name').type(item.name)
            cy.get('#email').type(item.email)
            cy.get('#subject').type(item.subject)
            cy.get('#comment').type(item.comment)
    
            cy.get('.btn-signin').click()
    
            cy.get('#feedback-title')
            .should('be.visible')
            .and('contain', 'Feedback')
    
            cy.get('.offset3')
            .should('be.visible')
            .and('contain', 'Thank you for your comments,')
    
        })

    })

})