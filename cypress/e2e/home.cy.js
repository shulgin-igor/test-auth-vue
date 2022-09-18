describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  });

  it('should redirect to Sign In page', () => {
    cy.url().should('equal', 'http://localhost:8080/sign-in');
  });
})
