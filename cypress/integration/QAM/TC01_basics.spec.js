describe('Login', function(){
    it('Sing in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('Aleksandra.milojevic@digitalatrium.rs')
        cy.get('input[type="password"]').type('Laki2003!')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})