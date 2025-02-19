import userData from '../fixtures/users/userData.json'
import { selectorsList } from '../selectors/loginSelectors'; // uso de{} pois é um export nomeado e não padrão

describe('pagina de login', () => {


  it('Registrar Usuario', () => {
    cy.visit('')
    cy.get(selectorsList.homeField)
    cy.get(selectorsList.logimField).click() 
    cy.get('h2').contains('New User Signup!')
    cy.location('pathname').should('eq', '/login') 
    cy.get(selectorsList.usernamField).type(userData.userSucess.username)
    cy.get(selectorsList.emailField).type(userData.userSucess.useremal)
    cy.get(selectorsList.regiterButton).click()

    cy.get("b").contains('Enter Account Information')
    cy.get(selectorsList.imputGender).click()
    cy.get(selectorsList.passwordField).type(userData.userSucess.userpassword)
    cy.get(selectorsList.daysSelector).select(userData.userSucess.userday)
    cy.get(selectorsList.monthsSelector).select(userData.userSucess.usermonth)
    cy.get(selectorsList.yearsSelector).select(userData.userSucess.useryear)

    cy.get(selectorsList.newsletterContains).contains('Sign up for our newsletter!')
    cy.get(selectorsList.newsletterCheckbox).click()
    cy.get(selectorsList.addressCheckbox).click()

    cy.get("b").contains('Address Information')
    cy.get(selectorsList.firstnameField).type(userData.userSucess.userFirstname)
    cy.get(selectorsList.lastnameField).type(userData.userSucess.userLastName)
    cy.get(selectorsList.companyField).type(userData.userSucess.userCompany)
    cy.get(selectorsList.adressOneField).type(userData.userSucess.userStreet)
    cy.get(selectorsList.adressTwoField).type(userData.userSucess.userStreetTwo)
    cy.get(selectorsList.countrySelector).select(userData.userSucess.userCountry)
    cy.get(selectorsList.stateSelector).type(userData.userSucess.userState)
    cy.get(selectorsList.citySelector).type(userData.userSucess.userCity)
    cy.get(selectorsList.postalCodeField).type(userData.userSucess.userPostalCode)
    cy.get(selectorsList.mobileNumberField).type(userData.userSucess.userNumber)
    cy.get(selectorsList.submitButton).click()

    cy.get("b").contains('Account Created!').should('be.visible')
    cy.get(selectorsList.continueButtonOne).click()
    cy.get(selectorsList.deleteButton).click()
    cy.get(selectorsList.continueButtonTwo).click()

  });
  it('Login Usuario', () => {
    cy.visit('')
    cy.get(selectorsList.logimField).click()
    cy.get(selectorsList.loginEmailField).type(userData.userSucess.useremailcorrect)
    cy.get(selectorsList.loginPasswordField).type(userData.userSucess.userpassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.deleteButton).should('be.visible')
  });
  it('Login Usuario Incorreto', () => {
    cy.visit('')
    cy.get(selectorsList.logimField).click()
    cy.get(selectorsList.loginEmailField).type(userData.userError.useremal)
    cy.get(selectorsList.loginPasswordField).type(userData.userError.userpassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertText).contains('Your email or password is incorrect!').should('be.visible')
  });
})