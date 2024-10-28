describe('Login', () => {
    it('User should able to login to dashboard with valid account', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('[name="username"]')
      .type('Admin')

      cy.get('[name="password"]')
      .type('admin123')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('h6', 'Dashboard').should('be.visible');
     
    })

    it('User should not able to login to dashboard with unregistered username', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('[name="username"]')
      .type('asdfjkl')

      cy.get('[name="password"]')
      .type('admin123')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('p', 'Invalid credentials').should('be.visible');
     
    })

    it('User should not able to login to dashboard with wrong password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('[name="username"]')
      .type('Admin')

      cy.get('[name="password"]')
      .type('asdfghjk')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('p', 'Invalid credentials').should('be.visible');
     
    })

    it('User should not able to login to dashboard with empty username', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('[name="password"]')
      .type('asdfghjk')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('span', 'Required').should('be.visible');
     
    })

    it('User should not able to login to dashboard with empty password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('[name="username"]')
      .type('Admin')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('span', 'Required').should('be.visible');
     
    })

    it('User should not able to login to dashboard with empty username and password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.contains('button', ' Login ')
      .click()

      cy.contains('span', 'Required').should('be.visible');
     
    })

  })