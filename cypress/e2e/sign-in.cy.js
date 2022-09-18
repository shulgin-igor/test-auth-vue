describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/sign-in')
  })

  it('should display the login form', () => {
    cy.get('[data-cy=auth-form]').should('exist');
  })

  it('should display Sign In button disabled by default', () => {
    cy.get('[data-cy=submit-button]').should('be.disabled');
  })

  it('should display validation error when email has invalid format', () => {
    cy.get('[data-cy=email-field]').type('test');
    cy.get('[data-cy=email-field]')
        .parents(".v-input__control")
        .find(".v-messages__message")
        .should('be.visible');
  })

  it('should display validation error when password is less than 5 characters', () => {
    cy.get('[data-cy=password-field]').type('test');
    cy.get('[data-cy=password-field]')
        .parents(".v-input__control")
        .find(".v-messages__message")
        .should('be.visible');
  })

  it('should not display validation error message when email is valid', () => {
    cy.get('[data-cy=email-field]').type('test@test.com');
    cy.get('[data-cy=email-field]')
        .parents(".v-input__control")
        .find(".v-messages__message")
        .should('not.be.visible');
  })

  it('should not display validation error when password is greater than 5 characters', () => {
    cy.get('[data-cy=password-field]').type('test123');
    cy.get('[data-cy=password-field]')
        .parents(".v-input__control")
        .find(".v-messages__message")
        .should('not.be.visible');
  });

  it('should toggle password field type on eye button click', () => {
    cy.get('[data-cy=password-field]')
        .parents(".v-input__control")
        .find("button")
        .click();
    cy.get('[data-cy=password-field]')
        .invoke('attr', 'type')
        .should('eq','text');
    cy.get('[data-cy=password-field]')
        .parents(".v-input__control")
        .find("button")
        .click();
    cy.get('[data-cy=password-field]')
        .invoke('attr', 'type')
        .should('eq','password');
  });

  it('should display Sign In button enabled when the form is valid', () => {
    cy.get('[data-cy=email-field]').type('test@test.com');
    cy.get('[data-cy=password-field]').type('test123');
    cy.get('[data-cy=submit-button]').should('not.be.disabled');
  })

  it('should display error message when trying to sign in with invalid credentials', () => {
    cy.get('[data-cy=email-field]').type('test1@test.com');
    cy.get('[data-cy=password-field]').type('test123456');
    cy.get('[data-cy=submit-button]').click();

    cy.get('[data-cy=invalid-creds]').should('be.visible');
  })

  it('should redirect to home screen when credentials are valid', () => {
    cy.get('[data-cy=email-field]').type('test@test.com');
    cy.get('[data-cy=password-field]').type('test123');
    cy.get('[data-cy=submit-button]').click();

    cy.url().should('equal', 'http://localhost:8080/')
  })
})
