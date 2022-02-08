describe('Create and mark - unmark as favorite', function (){
    before(function() {
         cy.SignIn()
    })
    

    it('Create a post', function (){
        // cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().as('menu')
        cy.get('@menu').contains('New Post').click()

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
        cy.get('.btn-primary').first().then(($fav) => { //it's not good solution for this
            return $fav.text()
        }).as('favCount')
        cy.get('@favCount').then(($cnt) => {
            expect(parseInt($cnt)).to.eq(1)
        })

        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')

    })
})