// Identificando erro no código

// Mariana implementou um novo comando personalizado para ir direto na página de registro verificar se o usuário desejado é válido. Mariana sabe que quando o nome de usuário está livre, deverá aparecer a seguinte mensagem abaixo:

//test
//user available

// Porém, com o comando que Marina usou, a mensagem não apareceu. Qual opção no cypress apresenta o comando correto e dentro das boas práticas para verificar se um usuário é válido?

describe('Test if the Username is not available in The Singup Page :(', () => {
    it('Fill out correctly the fields of the singup page form to sucessfully register a new user', () => {
      cy.visit('http://localhost:4200/')
      cy.get('[data-test="register"]').click();
      cy.get('input[data-test="email"]').type('lllll@lll.com');
      cy.get('input[data-test="fullName"]').type('Lllll Lllll');
      cy.get('input[data-test="registerUserName"]').type('lllllllll');
      cy.contains('Username already taken').should('be.visible');
      cy.get('input[data-test="registerPassword"]').type('LllllLllll');
      cy.get('[data-test="btnRegister"]').click();
    })
  })
  


  //Another option

//   Cypress.Commands.add('usuarioDisponivel', (nome) => {
//     cy.contains('a', 'Register now').click();  
//     cy.get('input[formcontrolname="userName"]').type(nome);
//     cy.contains('button', 'Register').click();
// });

// O formcontrolname está descrito corretamente, o texto será localizado e a mensagem vai aparecer corretamente. É importante somente lembrar de implementar depois da chamada ao comando cy.usuarioDisponivel(‘teste’), o assert para garantir que a mensagem está sendo mostrada corretamente.

// gerando relatórios

// Executamos o comando npx cypress run no terminal e acompanhamos os testes sendo executados diretamente no terminal, sem abrir a interface gráfica do cypress.

// Depois utilizamos o framework Mocha para gerar outros formatos de relatório, como um html por exemplo. Para isso instalamos o framework Mocha digitando no terminal o comando npm install --save-dev mochawesome e configuramos o arquivo cypress.config.json conforme abaixo:

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       { "reporter"; "mochawesome", 
//         "reporterOptions"; 
//           { "reportDir"; "cypress/report/mochawesome-report", 
//            "overwrite"; true, 
//            "html"; true, 
//            "json"; false, 
//            "timestamp"; "mmddyyyy_HHMMss" }}
//     },
//   },
// });

// Após a configuração executamos então o Mochawesome digitando no terminal o comando npx cypress run --reporter mochawesome.

// Também aprendemos a criar uma função reutilizável, para evitar o mesmo código espalhado em diversos pontos do projeto. No arquivo commands.js escrevemos a função abaixo, que será responsável por fazer o login, dado um usuário e senha:

// Cypress.Commands.add('login', (nome, senha) => {
//     cy.get('[data-test="loginUserName"]').type(nome);
//     cy.get('[data-test="loginPassword"]').type(senha);
//     cy.get('[data-test="loginBtn"]').click();
//     cy.contains('a', '(Logout)').should('be.visible');
// })

// No código de login correto podemos então substituir boa parte do código anterior pela nossa nova função, e ele deve ficar assim:

// describe('Página de login', () => {

//     beforeEach(() => {
//         cy.visit('http://localhost:4200')
//     })

//         it('Deve preencher os campos do formulário corretamente e realizar login', () => {
//             cy.login('carowl', '12345678')
//             })

// })


//O que aprendemos no projeto

// Executar os testes em modo headless, sem abrir a interface gráfica do Cypress;
// Verificar os relatórios e vídeos gerados ao executar testes em modo headless;
// Usar o pacote Mochawesome para personalizar a geração do relatório e ter a possibilidade de gerá-los como arquivos HTML, visualizando-os no browser;
// Utilizar o Dashboard para integrar os resultados dos testes e ter uma visão mais analítica e completa dos dados;
// Criar novos comandos personalizados, de acordo com a necessidade e referenciá-los como se fossem comando nativos do Cypress, como por exemplo: cy.login(), cy.registrar() ou da forma que considerar melhor.
