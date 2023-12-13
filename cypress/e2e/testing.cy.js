//New Code refactored

describe('Singup Page', () => {
  it('Fill out correctly the fields of the singup page form to sucessfully register a new user', () => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-test="register"]').click();
    cy.get('input[data-test="email"]').type('lllll@lll.com');
    cy.get('input[data-test="fullName"]').type('Lllll Lllll');
    cy.get('input[data-test="registerUserName"]').type('lllllllll');
    cy.get('input[data-test="registerPassword"]').type('LllllLllll');
    cy.get('[data-test="btnRegister"]').click();
  })
})

//with latest changes


//Code refactored
//  describe('Signup Page', () => {
//    it('Fill out correctly the fields of the singup page form to sucessfully register a new user', () => {
//      cy.visit('http://localhost:4200/#/home') //to open the home page of Alura Pic 
//      cy.contains('a', 'Register now').click(); //to click on the Register now Link to test if it works
//      cy.get('[data-test="email"]').type('catarina@email.com.br')//to get the Email Element of the Form
//      cy.get('[data-test="fullName"]').type('Catarina Pessoa')//to get the Full Name Element of the Form
//      cy.get('[data-test="registerUserName"]').type('catarinap') //to get the User Name Element of the Form
//      cy.get('[data-test="registerPassword"]').type('catarina123') //to get the Password Element of the Form
//      cy.contains('button', 'Register').click(); //to click on the Register Button to test if it works
//    })
//  })

 //Everythings went right with my test the refactored code brings the data-test param from the fields it's a best 
 //practice to use data-test instead of formcontrolname his way with devs change their code I'm testing it will
 //not break my code ;}

 //Type npx cypress open (on terminal to test my code ;})

//Old Code
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:4200/#/home') //to open the home page of Alura Pic 
//     cy.contains('a', 'Register now').click(); //to click on the Register now Link to test if it works
//     cy.get('[formcontrolname="email"]').type('catarina@email.com.br')//to get the Email Element of the Form
//     cy.get('[formcontrolname="fullName"]').type('Catarina Pessoa')//to get the Full Name Element of the Form
//     cy.get('[formcontrolname="userName"]').type('catarinap') //to get the User Name Element of the Form
//     cy.get('[formcontrolname="password"]').type('catarina123') //to get the Password Element of the Form
//     cy.contains('button', 'Register').click(); //to click on the Register Button to test if it works
//   })
// })


// Scrapping Web Form Fields/Elements to test if they're working

// Email Field Element Scrapped
// <input autofocus="" class="form-control ng-pristine ng-invalid ng-touched" data-test="email" formcontrolname="email" placeholder="email" ng-reflect-name="email">

// Full Name Field element scrapped
// <input class="form-control ng-untouched ng-pristine ng-invalid" data-test="fullName" formcontrolname="fullName" placeholder="full name" ng-reflect-name="fullName">

// User Name Field element scrapped
//<input class="form-control ng-untouched ng-pristine ng-invalid" data-test="registerUserName" formcontrolname="userName" placeholder="user name" ng-reflect-name="userName"> 

// Password Field element scrapped
//<input class="form-control ng-untouched ng-pristine ng-invalid" data-test="registerPassword" formcontrolname="password" placeholder="password" type="password" ng-reflect-name="password"> 





// Corrigindo time out problem na configuracao do Cypress se houver

// Para complementar seus estudos, caso queira saber mais sobre os primeiros passos de instalação e configuração, no link a seguir você pode acessar a documentação oficial do Cypress https://docs.cypress.io/guides/getting-started/installing-cypress

// , que descreve com mais detalhes algumas configurações avançadas por sistema operacional, bem como a utilização em contêineres e integração contínua.

// Mesmo seguindo todas as configurações passo a passo, é comum em algumas máquinas ocorrer na primeira execução do Cypress o erro: “Command timed out after 30000 miliseconds”. Para isso, temos duas alternativas:

// Executar novamente, com o comando npm run test ou npx cypress open.
// Aumentar esse tempo de verificação no arquivo verify.js que fica no caminho: node_modules\cypress\lib\tasks

// Localize a constante VERIFY_TEST_RUNNER_TIMEOUT_MS e altere de 30000 para 100000;

