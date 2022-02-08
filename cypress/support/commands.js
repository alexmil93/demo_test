import 'cypress-file-upload';



Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
    cy.title().should('eq','Conduit')
    cy.location('protocol').should('eq','https:')
    cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('Aleksandra.milojevic@digitalatrium.rs')
            cy.get('input[type="password"]').type('Laki2003!')
            cy.root().submit()   
        })
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
})

