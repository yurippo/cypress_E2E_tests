//New Register to embrace a new world! Test on Alura Pic Code implemented

 describe('Login Page', () => {
         it('Test to get the New Register to embrace a new world! Element on Alura Pic', () => {
           cy.visit('http://localhost:4200/#/home/signup') //to open the home page of Alura Pic 
           cy.contains('div','Register to embrace a new world!').should('be.visible');
         })
       })

    //    describe('Login Page', () => {
    //     it('Test to get the New Register to embrace a new world! Element on Alura Pic', () => {
    //       cy.visit('http://localhost:4200/#/home/signup') //to open the home page of Alura Pic 
    //       cy.contains('h4','Register to embrace a new world!').should('be.visible');
    //     })
    //   })


// Register to embrace a new world element
// <h4 class="text-center">Register to embrace a new world!</h4>

// 2 Possible solutions:

// 1-
// cy.contains('h4', 'Register to embrace a new world!').should('be.visible');

// O Cypress vai conseguir localizar o elemento, pois indicamos que é para realizar a busca em qualquer título criado com a tag HTML h4, justamente como esse texto foi incluído.

// 2-
// cy.contains('div', 'Register to embrace a new world!').should('be.visible');

// O Cypress vai conseguir localizar o elemento, pois indicamos que é para realizar a busca em qualquer divisão criada com a tag HTML div, e esse texto está incluído em um elemento dentro de uma divisão.







// Verificamos que o uso do contains pode facilitar a localização de um elemento, baseando-se em uma String que localize o conteúdo que se quer buscar.

// Sabendo disso e usando as ferramentas de desenvolvedor para inspecionar, como podemos escrever o comando de forma correta para localizar o elemento que contém o texto "Register to embrace a new world!" na tela de registro do site da aplicação AluraPic?

//Para saber mais: sintaxe do comando contains

// o contains é uma poderosa ferramenta para nos ajudar com a localização dos elementos. Além de simples de usar, ele é preciso na busca, desde que indiquemos o seletor adequado. Acesse a documentação oficial do Cypress sobre contais para verificar outras formas de utilização, que apresenta alguns exemplos e variações.

// https://docs.cypress.io/api/commands/contains

// implementamos dois contextos de teste, o de caminho feliz onde o usuário utiliza a aplicação exatamente como desejamos que ele faça.

// Também escrevemos um novo teste para verificar a interação com o usuário em caso de preenchimento incorreto dos campos da aplicação.