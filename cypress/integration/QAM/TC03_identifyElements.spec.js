describe('Create and mark - unmark as favorite', function (){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        // cy.get('input[type="email"]').type('Aleksandra.milojevic@digitalatrium.rs')
        // cy.get('input[type="password"]').type('Laki2003!')
        // cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('Aleksandra.milojevic@digitalatrium.rs')
            cy.get('input[type="password"]').type('Laki2003!')
            cy.root().submit()   
        })
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create a post', function (){
        // cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()

        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test demo')
            cy.get('textarea').last().type('Test description')
            cy.contains('Publish Article').click()
        })
        // cy.get('input[placeholder = "Article Title"]').type('Test')
        // cy.get('input[placeholder = "What\'s this article about?"]').type('Test demo')
        // cy.get('textarea[placeholder = "Writw your article (in markdown)]"]').type('Test description')
        // cy.contains('Publish Article').click()
        cy.url(),should('include','article')
    })

    it('Mark-unmark as favorite' , function(){
        //cy.get('.nav-link').contains('Alex_93').click()
        cy.get('ul.navbar-nav').children().contains('Alex_93').click
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click
        cy.url().should('include','favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')

    })
})