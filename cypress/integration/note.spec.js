describe('E2E Note test', () => {
  it('should create new record', () => {
    cy.visit('/')

    cy.get('[placeholder="What needs to be noted?"]')
      .click()
      .type('Fake example note')
      .should('have.value', 'Fake example note')

    cy.contains('No record found')

    cy.get('[value="Fake example note"]').type('{enter}')
  })

  it('should edit note title', () => {
    cy.visit('/')

    cy.contains('Fake example note')
      .get('article:first div[class^="Note__Icons"] button:first')
      .click()
      .focused()
      .type('!!!{enter}')
      .should('have.value', 'Fake example note!!!')
  })

  it('should finished and remove', () => {
    cy.visit('/')
    cy.get('article:first button[aria-label="Toggle"]').as('toggleBtn')

    cy.get('@toggleBtn')
      .should('have.css', 'background-color')
      .and('match', /150/)

    cy.get('@toggleBtn')
      .click()
      .should('have.css', 'background-color')
      .and('match', /163/)

    cy.get('article:first div[class^="Note__Icons"] svg.icon-remove').click()

    cy.get('article:first').should('not.contain', 'Fake example note!!!')
  })

  it('should display detail page', () => {
    cy.visit('/')
    cy.get('article:first a').click()

    cy.url().should('include', '/note?id=')

    cy.get('a')
      .contains('back')
      .click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})
