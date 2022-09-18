// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('visitEnv', (env) => {
  cy.visit(env);
})
Cypress.Commands.add('login', (user) => {
  cy.get('input[data-test="sign-in-username-input"]').type(user.username);
  cy.get('input[data-test="sign-in-password-input"]').type(user.password);
  cy.get('button[data-test="sign-in-sign-in-button"]').contains('Sign In').click();
  cy.wait(3000);
  cy.get('#root').contains('Global');
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
