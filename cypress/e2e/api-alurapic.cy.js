
//Now we'll test Alurapic API in this case we're not visitting an URL we're making an API request and expecting an API response

describe('API Test Alurapic', () => {
    it('API Data', () => {
      cy.request({ //here I have the method and set the data for my request
        method:'POST', //method used POST
        url: 'http://localhost:3000/user/login', //here we'll get the url from Headers in network tab browser Request URL: http://localhost:3000/user/login
        body: Cypress.env() //will immport the data from my .env file //here I'll add what will be the body of this request What I want my code to do inside of the API
         }).then((res) => { //the response of my request will be inside of this function //here I need to create what will be the response for my request becase we're testing an API
           expect(res.status).to.be.equal(200) //here I expect the response of the status code 200 for right login //inside this function I make my API calls
           expect(res.body).is.not.empty //body cannot be empty
           expect(res.body).to.have.property('id') //expecting the response body brings an id from the user
           expect(res.body.id).to.be.equal(3) // in case we're working with an user that has id = 3 for example

         })  
    })
  })

// Vamos implementar outros testes em nossa API!

// Vamos abrir a inspeção para acompanhar o que está acontecendo, ativar o Network e fazer o primeiro login utilizando os próprios dados. Ao fazê-lo, perceba que ele já registrou as requisições feitas.

// Se navegarmos pelas abas, conseguimos ver onde a requisição está sendo feita. Na primeira vez, foi para o "localhost:3000". Entretanto, ao mudar para o payload, nos são mostradas algumas informações que não deveriam ser expostas, como nome, senha, e-mail e ID.

// Esses dados não devem ser expostos, mas foram mostrados porque a requisição da API está consultando isso diretamente em nosso projeto. Se subirmos isso para a integração, usando o Git, por exemplo, ficará exposto para o restante da equipe. Sendo assim, precisamos corrigir esta questão.

// De volta ao VS Code, criaremos diretamente na raiz do projeto um novo documento chamado cypress.env.json. Nele, vamos inserir todas as informações que queremos carregar para o arquivo de Git ignore, para que, quando fizermos a integração com o Git, ele não vá para o repositório.

// Dentro desse arquivo, vamos inserir todas as informações que devem permanecer privadas no momento da integração com o Git. Os dados são justamente aqueles que vimos no navegador. Então, vamos voltar ao navegador e copiar a linha que contém o usuário e a senha. Depois, voltamos ao VS Code e colamos.

// Agora, vamos iniciar a implementação do nosso primeiro teste de API. Dentro da pasta "e2e", criaremos um novo arquivo chamado "api-alurapic.cy.js". Em seguida, copiaremos o corpo do teste que temos no documento "data-testes.cy.js" e colaremos em "api-alurapic.cy.js", pois teremos uma estrutura similar.

// describe('Página de cadastro', () => {
//   it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//       cy.visit('http://localhost:4200/');
//       cy.get('[data-test="register"]').click();
//       cy.get('input[data-test="email"]').type('11111@111.com');
//       cy.get('input[data-test="fullName"]').type('L1111 L1111');
//       cy.get('input[data-test="registerUserName"]').type('111111111');
//       cy.get('input[data-test="registerPassword"]').type('L111111111');
//       cy.get('[data-test="btnRegister"]').click();
//   })
// })

// Feito isso, faremos as alterações necessárias.

// Vamos alterar o nome do teste de 'Página de cadastro' para 'Api Alurapic', em describe(). Depois, mudaremos o nome que está na função it() de 'Preencher os campos do formulário corretamente para cadastrar um novo usuário' para 'Dados da API'.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//       cy.visit('http://localhost:4200/');
//       cy.get('[data-test="register"]').click();
//       cy.get('input[data-test="email"]').type('11111@111.com');
//       cy.get('input[data-test="fullName"]').type('L1111 L1111');
//       cy.get('input[data-test="registerUserName"]').type('111111111');
//       cy.get('input[data-test="registerPassword"]').type('L111111111');
//       cy.get('[data-test="btnRegister"]').click();
//   })
// })

// O próximo passo será alterar os comandos de cy.get(), já que não estamos mais visitando uma URL, e sim fazendo uma requisição diretamente para a API. Sendo assim, podemos excluir todos os comandos das linhas seguintes.
// describe('Api Alurapic', () => {
//   it('Dados da API', () => {

//   })
// })

// Primeiramente, criaremos uma requisição para a API.

// Então, vamos colocar cy.request() para realizar a requisição. Dentro, vamos indicar qual é o método passando method: 'POST':

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST'
//           })
//   })
// })

// Na linha seguinte, indicaremos em qual URL faremos essa requisição. Para isso, voltamos ao navegador e, em "Headers", a copiamos de "Request URL". De volta ao código, passamos url: seguido da URL copiada entre aspas simples:

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login'
//           })
//   })
// })

// Agora, precisamos especificar qual será o corpo dessa requisição, ou seja, o que queremos que ele execute dentro da API. Anteriormente, estávamos criando manualmente os dados para realizar o login, por isso acrescentamos o nome de usuário e a senha.

// Precisamos fazer isso dentro do corpo da requisição. Então passamos body: e, ao invés de colocar manualmente, vamos configurar para ele pegar isso do documento env. Sendo assim, passamos Cypress.env() e o sistema já entende que irá importar esses dados de dentro do arquivo env.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           })
//   })
// })

// Em seguida, precisamos criar qual será a resposta da requisição, afinal, estamos testando uma API. Depois de fechar o último parênteses, criaremos o corpo dessa requisição adicionando .then(). Dentro, passamos res, que significa que a resposta da nossa requisição estará dentro dessa função, e criamos uma arrow function.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
              
//           })
//   })
// })

// Vamos fazer as primeiras chamadas do Cypress para API.

// Esperamos a resposta do status code. Como queremos que o login seja bem-sucedido, então será um status code 200. Dessa forma, passamos expect(res.status).to.br,equal(200).

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//           })
//   })
// })

// Na linha seguinte, inserimos outro expect(), pois a próxima resposta que esperamos da requisição é que ela não seja nula, já que precisa realmente funcionar. Portanto, passamos res.body para expect(), e incluímos .is.not.empty, ou seja, ele precisa retornar alguma informação.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//               expect(res.body).is.not.empty
//           })
//   })
// })

// Na próxima linha, colocaremos outra resposta de requisição, expect(res.body), e inserimos algum dado que verificamos após realizar o login, assim vamos validar se realmente está funcionando.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//               expect(res.body).is.not.empty
//               expect(res.body)
//           })
//   })
// })

// Voltando ao navegador, quando realizamos a consulta no payload no preview, tínhamos os dados de ID, nome e e-mail do usuário. Vamos pedir que o ID seja verificado. Perceba que ele está sendo exibido como 4, referente ao usuário número 4.

// Para isso, incluímos .to.have.property(), passando 'id', entre aspas simples. Dessa forma, se o login foi bem-sucedido, queremos que ele retorne o ID do usuário pessoa que fez o login.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//               expect(res.body).is.not.empty
//               expect(res.body).to.have.property('id')
//           })
//   })
// })

// Em seguida, na próxima linha, vamos colocar a resposta que esperamos ter como ID. Portanto, expect(res.body.id).to.be.equal(4). Como estamos lidando com números, não passamos este dado entre aspas simples.

// describe('Api Alurapic', () => {
//   it('Dados da API', () => {
//           cy.request({
//               method: 'POST',
//               url: 'http://localhost:3000/user/login',
//               body: Cypress.env()
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//               expect(res.body).is.not.empty
//               expect(res.body).to.have.property('id')
//               expect(res.body.id).to.be.equal(5)
//           })
//   })
// })

// Vamos salvar o código teclando "Ctrl + S" e abrir o terminal para fazer o teste.

// No terminal, executamos o comando npx cypress open para rodar o teste relacionado à API da AluraPic.

// npx cypress open

// O Cypress será iniciado e entraremos em "api-alurapic".

// Note que o teste funcionou, então conseguimos criar uma estratégia para manter os dados sensíveis seguros, evitando que eles sejam enviados para a integração quando fazemos um push para o GitHub, não sendo acessíveis para as demais pessoas da equipe.

// A seguir, continuaremos a ver outras boas práticas para implementarmos em nossos testes.