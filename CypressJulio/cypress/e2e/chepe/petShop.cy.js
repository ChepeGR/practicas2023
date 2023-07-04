import "cypress-real-events";
import { locatorsPetShop } from "./locators";


const date = Math.floor(Math.random() * 200);

describe('Pet shop', () => {  
    it('Logearse y escribir todos los escenarios posibles', () => {
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
      //boton para ingresar
      cy.contains('Sign In').click();
      //boton para registrarse
      cy.contains('Register Now!').click();
      //id
      cy.get(locatorsPetShop.userID).type('Chepe the kid' + date.toString());
      cy.realPress("Tab");
      //password
      cy.get(locatorsPetShop.newPassword).type('bebecitadimeuwu');
      cy.realPress("Tab");
      //repeat password
      cy.get(locatorsPetShop.repeatPassword).type('bebecitadimeuwu');
      cy.realPress("Tab");
      //first name
      cy.get(locatorsPetShop.firstName).type('Philip');
      cy.realPress("Tab");
      //last name
      cy.get(locatorsPetShop.lastName).type('Morris');
      cy.realPress("Tab");
      //email
      cy.get(locatorsPetShop.inputEmail).type('puchitoloco' + date.toString() + '@malboro.com');
      cy.realPress("Tab");
      //phone
      cy.get(locatorsPetShop.inputPhone).type('0800-donrouch');
      cy.realPress("Tab");
      //adress1
      cy.get(locatorsPetShop.inputAdress1).type('San lorenzo 1981');
      cy.realPress("Tab");
      //adress2
      cy.get(locatorsPetShop.inputAdress2).type('Indio Solari 1949');
      cy.realPress("Tab");
      //city
      cy.get(locatorsPetShop.inputCity).type('gotham');
      cy.realPress("Tab");
      //state
      cy.get(locatorsPetShop.inputState).type('Mar del queso');
      //zip code
      cy.get(locatorsPetShop.inputZip).type('7600');
      cy.realPress("Tab");
      //country
      cy.get(locatorsPetShop.inputCountry).type('Argenzuela');
      cy.realPress("Tab");
      //dropdown lenguage
      cy.get(locatorsPetShop.dropdownLenguage).select('english');
      //favorite animal
      cy.get(locatorsPetShop.dropdownFavoritePet).select('DOGS');
      cy.realPress("Tab");
      //mylist button
      cy.realPress("Space");
      cy.realPress("Tab");
      //mybanner button
      cy.realPress("Space");
      //save acount info
      cy.get(locatorsPetShop.buttonSaveAccountInformation).click();
      //una vez logeado que inicie sesion
      cy.contains('Sign In').click();
      //usuario
      cy.get('[id^=stripes-]').type('Chepe the kid');
      cy.realPress("Tab");
      //contraseña erronea
      cy.realPress("Delete");
      cy.get(locatorsPetShop.passwordLogin).type('bebecitadimeuwup');
      //apretar boton de login
      cy.get(locatorsPetShop.loginButton).click();
      //assert
      cy.get('.messages').should('be.visible');
      //vuelve al inicio
      cy.get('#LogoContent').click();
      //assert
      cy.get('#MainImageContent').should('be.visible');
      //usuario erroneo
      cy.contains('Sign In').click();
      cy.get('[id^=stripes-]').type('Chepe the men');
      cy.realPress("Tab");
      //contraseña 
      cy.realPress("Delete");
      cy.get(locatorsPetShop.passwordLogin).type('bebecitadimeuwu');
      //apretar boton de login
      cy.get(locatorsPetShop.loginButton).click();
      //assert
      cy.get('.messages').should('be.visible');
      //vuelve al inicio
      cy.get('#LogoContent').click();
      //boton para iniciar sesion
      cy.contains('Sign In').click();
      //iniciar sesion con usuario erroneo
      cy.get('[id^=stripes-]').type('Chepe the grandpa');
      cy.realPress("Tab");
      //contraseña erronea 
      cy.realPress("Delete");
      cy.get(locatorsPetShop.passwordLogin).type('bebecitadimetutu');
      //apretar boton de login
      cy.get(locatorsPetShop.loginButton).click();
      //assert
      cy.get('.messages').should('be.visible');
    })
  })