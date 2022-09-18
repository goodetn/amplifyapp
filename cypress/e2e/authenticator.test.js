describe('Authenticator:', function() {
  beforeEach(function() {
      cy.visitEnv('staging');
  });
  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      cy.login(Cypress.config('users').user1);
    });
  });
});
