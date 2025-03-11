import userData from '../fixtures/users/userData.json'; // Importa os dados do usuário para uso nos testes
import { selectorsList } from '../selectors/loginSelectors'; // Importa os seletores da página de login

describe('pagina de login', () => {

  it('Registrar Usuario', () => {
    cy.visitAndClickLogin() // Visita a página inicial e clica no botão de login
    cy.get('h2').contains('New User Signup!') // Verifica se o texto "New User Signup!" está visível
    cy.location('pathname').should('eq', '/login') // Verifica se a URL contém '/login'
    cy.get(selectorsList.usernamField).type(userData.userSucess.username) // Preenche o campo de nome de usuário
    cy.get(selectorsList.emailField).type(userData.userSucess.useremalcadastro) // Preenche o campo de email
    cy.get(selectorsList.regiterButton).click() // Clica no botão de registro

    cy.get(selectorsList.bSelector).contains('Enter Account Information') // Verifica se o texto "Enter Account Information" está visível
    cy.get(selectorsList.imputGender).click() // Seleciona o gênero (masculino/feminino)
    cy.get(selectorsList.passwordField).type(userData.userSucess.userpassword) // Preenche o campo de senha
    cy.get(selectorsList.daysSelector).select(userData.userSucess.userday) // Seleciona o dia de nascimento
    cy.get(selectorsList.monthsSelector).select(userData.userSucess.usermonth) // Seleciona o mês de nascimento
    cy.get(selectorsList.yearsSelector).select(userData.userSucess.useryear) // Seleciona o ano de nascimento

    cy.get(selectorsList.newsletterContains).contains('Sign up for our newsletter!') // Verifica o texto do checkbox de newsletter
    cy.get(selectorsList.newsletterCheckbox).click() // Marca o checkbox de newsletter
    cy.get(selectorsList.addressCheckbox).click() // Marca o checkbox de ofertas especiais

    cy.get(selectorsList.bSelector).contains('Address Information') // Verifica se o texto "Address Information" está visível
    cy.get(selectorsList.firstnameField).type(userData.userSucess.userFirstname) // Preenche o campo de primeiro nome
    cy.get(selectorsList.lastnameField).type(userData.userSucess.userLastName) // Preenche o campo de sobrenome
    cy.get(selectorsList.companyField).type(userData.userSucess.userCompany) // Preenche o campo de empresa
    cy.get(selectorsList.adressOneField).type(userData.userSucess.userStreet) // Preenche o campo de endereço 1
    cy.get(selectorsList.adressTwoField).type(userData.userSucess.userStreetTwo) // Preenche o campo de endereço 2
    cy.get(selectorsList.countrySelector).select(userData.userSucess.userCountry) // Seleciona o país
    cy.get(selectorsList.stateSelector).type(userData.userSucess.userState) // Preenche o campo de estado
    cy.get(selectorsList.citySelector).type(userData.userSucess.userCity) // Preenche o campo de cidade
    cy.get(selectorsList.postalCodeField).type(userData.userSucess.userPostalCode) // Preenche o campo de CEP
    cy.get(selectorsList.mobileNumberField).type(userData.userSucess.userNumber) // Preenche o campo de número de telefone
    cy.get(selectorsList.submitButton).click() // Clica no botão de submit

    cy.get(selectorsList.bSelector).contains(userData.userError.createMessage) // Verifica a mensagem de sucesso após o registro
    cy.get(selectorsList.continueButtonOne).click() // Clica no botão "Continue" após o registro
    cy.get(selectorsList.deleteButton).click() // Clica no botão para deletar a conta
    cy.get(selectorsList.continueButtonTwo).click() // Clica no botão "Continue" após deletar a conta
  });

  it('Login Usuario', () => {
    cy.visitAndClickLogin() // Visita a página inicial e clica no botão de login
    cy.login(userData.userSucess.useremalogin, userData.userSucess.userpassword) // Faz login com email e senha válidos
    cy.get(selectorsList.deleteButton).should('be.visible') // Verifica se o botão de deletar conta está visível (indica que o login foi bem-sucedido)
  });

  it('Login Usuario Incorreto', () => {
    cy.visit('') // Visita a página inicial sem clicar no botão de login
    cy.login(userData.userError.useremalincorrect, userData.userError.userpasswordincorrect) // Tenta fazer login com email e senha incorretos
    cy.verifyMessage(selectorsList.alertText, userData.userError.errorMessage) // Verifica se a mensagem de erro é exibida
  });
});