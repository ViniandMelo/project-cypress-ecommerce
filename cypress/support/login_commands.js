// cypress/support/commands.js
import { selectorsList } from '../selectors/loginSelectors'; // Importe os seletores, se necessário
import { userData } from '../fixtures/users/userData.json'; // Importe os dados do usuário, se necessário


Cypress.Commands.add('visitAndClickLogin', () => {
  cy.visit('');
  cy.get(selectorsList.logimField).click();
});

Cypress.Commands.add('login',(user ,password)=> {
    cy.get(selectorsList.logimField).click()
    cy.get(selectorsList.loginEmailField).type(user)
    cy.get(selectorsList.loginPasswordField).type(password)
    cy.get(selectorsList.loginButton).click()
})

Cypress.Commands.add('verifyMessage', (seletor,message) => {
  cy.get(seletor).contains(message).should('be.visible');
});
