describe('Menu on mobile', () => {
  it('submenu should be accessible when active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/about/')
    cy.get('.usa-menu-btn').click()
    cy.checkA11yWithSingleViewPort()
  });

  it('submenu should be accessible when not active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/search')
    cy.get('.usa-menu-btn').click()
    cy.checkA11yWithSingleViewPort()
  })
})
