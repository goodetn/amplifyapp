describe('Authenticator:', function() {
  beforeEach(function() {
      cy.visit('/');
  });
  describe('Sign In:', () => {
      it('allows a user to signin', () => {
          cy.get(selectors.usernameInput).type(
            '<Your Username in stating env>'
          );
          cy.get(selectors.signInPasswordInput).type(
            '<Your Password in staging env>'
          );
          cy.get(selectors.signInSignInButton).contains('Sign In').click();
          cy.wait(3000)
          cy.get(selectors.root).contains('Global');
      });
  });
});
export const selectors = {
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  root: '#root'
};