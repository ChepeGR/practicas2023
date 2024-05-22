# practicas2023
Proyecto de Pruebas Automatizadas con Cypress
Este repositorio contiene un conjunto de pruebas automatizadas utilizando Cypress para verificar la funcionalidad de una calculadora simple, una página de Mercado Libre y una tienda de mascotas (Petshop). A continuación, se detallan los objetivos de cada test, las tecnologías y dependencias utilizadas, y las instrucciones para la instalación y ejecución de las pruebas.

Tecnologías Utilizadas
Lenguaje: JavaScript
Framework: Cypress
Objetivos del Test
1. Test de Calculadora
Este test tiene como objetivo verificar el correcto funcionamiento de una calculadora simple. Es ideal para practicar y comprobar funcionalidades básicas de Cypress.

2. Test de Mercado Libre
Este test verifica el proceso de inicio de sesión de un usuario en Mercado Libre y, utilizando la funcionalidad de testIsolation, asegura que el usuario pueda navegar en la página con la sesión iniciada previamente.

3. Test de Petshop
Este test se enfoca en verificar la funcionalidad del teclado en una tienda de mascotas, asegurando que la accesibilidad y la interacción mediante teclado funcionen correctamente.

Estructura del Proyecto
tests/calculadora.spec.js: Contiene los tests relacionados con la calculadora.
tests/mercadolibre.spec.js: Contiene los tests relacionados con Mercado Libre.
tests/petshop.spec.js: Contiene los tests relacionados con la tienda de mascotas.
locators/: Carpeta que contiene los locators encapsulados usados en cada test.
Dependencias
cypress-real-events
testIsolation
Instalación
Prerrequisitos
Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargar Node.js desde aquí.

Pasos de Instalación
Clonar el repositorio

Terminal
Copiar código
git clone https://github.com/ChepeGR/practicas2023.git
cd tu-repositorio
Instalar Cypress y dependencias

Terminal
Copiar código
npm install cypress --save-dev
npm install cypress-real-events --save-dev
Configurar testIsolation
En el archivo de configuración de Cypress (cypress.config.js), añade la siguiente línea:

javascript
Copiar código
module.exports = {
  e2e: {
    testIsolation: false
  }
}
Ejecutar Pruebas
Para abrir la interfaz de usuario de Cypress y ejecutar las pruebas, utiliza el siguiente comando:

bash
Copiar código
npx cypress open
Para ejecutar las pruebas en modo headless, utiliza el siguiente comando:

bash
Copiar código
npx cypress run
Contacto

eduardojgriboldi@gmail.com
www.linkedin.com/in/eduardo-garcia-riboldi-36803a222
https://github.com/ChepeGR
