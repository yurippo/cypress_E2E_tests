

//New Test Code implemented

 describe('Login Page', () => {
         it('Fill out correctly the fields of the login page form to sucessfully login a registered user', () => {
           cy.visit('http://localhost:4200/#/home') //to open the home page of Alura Pic 
           cy.get('[data-test="loginUserName"]').type('catarinap') //to get the User Name Element of the Form
           cy.get('[data-test="loginPassword"]').type('catarina123') //to get the Password Element of the Form
           cy.contains('button', 'login').click(); //to click on the Register Button to test if it works
         })
       })


//npx cypress run (to run the test on vs code terminal)
// this is the way we execute our tests on terminal if we don't wanna use the Cypress GUI

//To use a TEST Double we can use the cypress library machawesome a reporter that will execute the tests for us and bring the results
//inside of the project we just have to call the library and use it

// Dentro da pasta do seu projeto execute npm init para criar o package.json
// Execute o camando npm install --save-dev mochawesome para instalar o mochawesome, a pasta node_modules será criada.
// Execute npx cypress run --reporter mochawesome e a pasta com o relatório será criada.

//These alternate options to the Cypress GUI can be used to create faster tests and better integrated with the QA routine

//Para saber mais: executando testes em modo headless

// Realizar testes em modo headless (tradução livre: sem cabeça) significa não precisar de uma interface gráfica para interagir com o navegador. Consequentemente, os testes rodam mais rapidamente e podem ser executados a partir de ferramentas de integração contínua como Jenkins ou dentro de um container Docker, por exemplo.

//https://www.jenkins.io/

//https://www.docker.com/

// Como vimos, para executar os testes em headless mode, utilizamos o comando cypress run. Esse comando pode ter variação de acordo com o gerenciador de pacotes utilizado (NPM ou Yarn) . Para maiores detalhes, pode-se consultar a documentação oficial do Cypress.

// https://docs.cypress.io/guides/guides/command-line


