import { locatorsML } from "./locators";
import "cypress-real-events";

describe('Mercadolintr', () => {
    it('Tiene que entrar a mercadolibre', () => {
      //entrar a mercadolibre
      cy.visit("https://www.mercadolibre.com.ar/");
      //assert
      cy.get('#nav-header-menu').should('be.visible');
      //button de registrarse
      cy.get(locatorsML.buttonRegister).click();
      //assert
      cy.get('#second-button').should('be.visible');
      //button de aceptar cookies
      cy.get(locatorsML.buttonCookies).first().click()
      //button de acepto terminos y condiciones
      cy.get(locatorsML.buttonTermandConds).click();
      //button de crear cuenta personal
      cy.get(locatorsML.buttonCuentaPersonal).first().click();
      //assert
      cy.get('.andes-list__item-text').should('be.visible');
      //button de agregar mail
      cy.get(locatorsML.buttonAgregarMail).click();
      cy.get(locatorsML.buttonAgregarMail).click();
      cy.origin('www.mercadolibre.com', () => {
        //escribir mail  
        cy.get('input[name="email"]').type('chepegarciariboldijr@gmail.com')
        //click en continuar
        cy.get('button[type="submit"]').click();   
      });
      cy.get('.andes-button__content').click();
      //escribe en el buscador camara analogica
      cy.get(locatorsML.buscadorML).type(locatorsML.escribeYenter);
      //busca solo los que tienen envio gratis
      cy.get(locatorsML.botonEnvioGratis).click();
    })
  })
