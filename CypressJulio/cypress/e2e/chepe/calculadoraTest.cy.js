import { locatorsCalc } from "./locators";
import "cypress-real-events";

describe('Calculadora', ()=>{
    it('Realizar una multiplicacion',()=>{
        //entrar a la pagina
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        //escribir primer numero
        cy.get(locatorsCalc.firstNumber).type('50').realPress("Tab");
        //escribir segundo numero
        cy.get(locatorsCalc.secondNumber).type('3');
        //apretar dropdown y seleccionar opcion multiplicar
        cy.get(locatorsCalc.operationDropdown).select('Multiply');
        //apretar boton calcular
        cy.get(locatorsCalc.calculateButton).click();
        //borrar la operacion
        cy.get(locatorsCalc.clearButton).click();
        //assert answer 
        cy.get(locatorsCalc.resultButton).should('be.empty');
    })
})

