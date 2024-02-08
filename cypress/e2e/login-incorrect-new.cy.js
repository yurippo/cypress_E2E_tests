//New Login Incorrect Test intercepting incorrect login request (wrong creds sent interacting with the Alura Pic API)
//In this case we're not doing an interection with the user we're doing an API interection

 describe('Login page', () => {

   beforeEach(() => {
       cy.visit('http://localhost:4200')

       cy.intercept('POST', 'http://localhost:3000/user/login',{
          statusCode:400
       }).as('stubPost') //inside of the intercept method I'll implement the method POST also adding the requested URL I got from the bROWSER, statusCode:400 as stubPost
   }) //here we basically implemented one interaction direct with the API POST and URL to do the login and our Test double that is stubPost will implement the 400 Error

   it('Verifica mensagens de campos obrigatórios na página de login', () => {
           cy.contains('User name is required!').should('be.visible');
           cy.contains('Password is required!').should('be.visible');       
   })

   it('Deve falhar mesmo que od campos sejam preenchidos corretamente', () => {
           cy.login('carowl','12345678'); //here I use my implemented method for login
           cy.wait('@stubPost') // here I wast the response and call my stubPost mock to respond    
})
      
 })

 //Now it's time to excute my test on the terminal npx cypress open

 
// Criando um dublê para testes

// Até agora, implementamos testes de caminho feliz e de caminho triste. Existem alguns outros tipos de testes que conseguimos fazer usando o Cypress. Podemos, por exemplo, fazer conexões diretas com a nossa API. Lembre-se que o AluraPic é um sistema completo, e possui tanto o front-end quanto o back-end, além da API para conectar essas duas partes.

// Utilizando o navegador, podemos usar a ferramenta de inspeção. Ao clicar na parte onde está escrito "Network", conseguimos visualizar e inspecionar as requisições. É aqui que vemos o que a API está solicitando do back-end e encaminhando para o front-end. Na página de login, testamos os inputs e capturamos as mensagens de erro.

// Agora, vamos analisar o que acontece quando preenchemos com dados aleatórios e tentamos fazer login. Perceba que surge um pop-up informando que o usuário é inválido. Se inspecionarmos a aba Network, vemos as requisições feitas com a nossa API. Houve uma tentativa de fazer o login para o endereço localhost, mas falhou, gerando um erro 400. Como podemos capturar isso em nossos testes?

// Até agora, usamos apenas elementos CSS para interagir, então vamos voltar ao VS Code para implementar essa captura.

// No VS Code, vamos para o arquivo "login-incorreto.cy.js" Escolhemos este arquivo porque ainda estamos tratando de um cenário de caminho triste. Então, queremos ver o que acontece se fizermos o login de forma incorreta, usando o usuário inválido no AluraPic.

// Portanto, dentro deste arquivo, vamos simular esse erro e fazer com que o pop-up apareça, mesmo que coloquemos dados corretos nos campos, pois precisamos validar isso. É necessário que o pop-up esteja funcionando caso o usuário preencha incorretamente o campo de login.

// Então, o que faremos será implementar o uso de um dublê de teste. Os mais populares são o mock e o stub. O mock é usado para cenários mais complexos e completos. Nesse caso, temos algo simples, então usaremos o stub.

// No código, depois de estabelecer localhost:4200, vamos dar dois enter para pular duas linhas. Por volta da linha 6 do código, após fechar os parênteses de cy.visit(), criaremos um novo comando cy.intercept() que deve interagir com a nossa API. Dentro dos parênteses, implementaremos o método post. Para isso, incluímos aspas simples, passando 'POST'.

// Depois de fechar as aspas simples, colocamos uma vírgula e um espaço, e passamos aspas simples novamente, agora com o link de conexão da API para a requisição.

// Para pegar este link, voltamos ao navegador e o copiamos de "Required URL": http://localhost:3000/user/login. De volta ao VS Code, o colamos dentro das aspas simples.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login');
//         })

// Dessa vez não estamos interagindo com a parte do usuário, e sim diretamente com a API.
// Após fechar essas aspas, incluímos uma vírgula e um espaço, e abrimos chaves. Dentro das chaves, mas na linha seguinte, passamos o que queremos que seja retornado. Nesse caso, para que o pop-up de erro apareça, precisamos implementar o erro 400, que irá gerar a saída do pop-up. Para isso, basta passarmos statusCode: 400.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     })
//         })


// Agora, após o fechamento dos parênteses, digitamos a última saída. Queremos que ele implemente isso através do 'stubPost'.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     }).as('stubPost')
//         })


// Basicamente, estabelecemos uma interação direta com a API, onde faremos um post com a URL para fazer o login, e o dublê de teste, que é o stubPost, implementará o erro 400.

//  Além disso, ainda precisamos implementar a função que realmente preencherá os campos para resultar em uma saída incorreta.
        
// Então, após fecharmos o parêntese da implementação do método de verificação de mensagens de campos obrigatórios, vamos adicionar duas quebras de linha e implementar uma nova função.
        
// Para isso, podemos simplesmente copiar e colar o código acima e fazer as alterações necessárias. Neste caso, mudaremos o nome do teste para 'Deve falhar mesmo que os campos sejam preenchidos corretamente', pois precisamos que isso aconteça para que o pop-up apareça no teste.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     }).as('stubPost')
//         })
            
//     it('Verifica mensagens de campos obrigatórios na página de login', () => {
//             cy.contains('User name is required!').should('be.visible');
//             cy.contains('Password is required!').should('be.visible');
//         })
            
//             it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
//             cy.contains('User name is required!').should('be.visible');
//             cy.contains('Password is required!').should('be.visible');
//         })
//     })

// Em seguida, apagaremos as duas linhas seguintes que foram copiadas do código anterior, onde captávamos as mensagens de erro.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     }).as('stubPost')
//         })
            
//     it('Verifica mensagens de campos obrigatórios na página de login', () => {
//             cy.contains('User name is required!').should('be.visible');
//             cy.contains('Password is required!').should('be.visible');
//         })
            
//             it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
            
//         })
//     })

// Agora, vamos implementar o que realmente preencherá os campos e que, intencionalmente, vai resultar em erro, já que queremos que ele ocorra.

// Ao invés de preencher manualmente, vamos utilizar o comando personalizado que criamos anteriormente: o cy.login(). Portanto, vamos chamá-lo e preencher o que queremos que seja colocado nos campos.
    
// Nesse caso, faremos o login com o próprio usuário e senha. Estamos passando os dados da instrutora, mas lembre-se de usar os seus.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     }).as('stubPost')
//         })
            
//     it('Verifica mensagens de campos obrigatórios na página de login', () => {
//             cy.contains('User name is required!').should('be.visible');
//             cy.contains('Password is required!').should('be.visible');
//         })
            
//             it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
//             cy.login('carowl', '12345678')
//         })
//     })

// Na linha seguinte, implementaremos o que queremos que seja feito após o preenchimento, ou seja, que resulte em um erro.

// Vamos utilizar o cy.wait(), um comando do Cypress que vai esperar a resposta do stub. Para ele, vamos passar '@stubPost' entre aspas simples. Dessa forma, estamos chamando o stubPost para responder.

// describe('Página de login', () => {
//         beforeEach(() => {
//             cy.visit('http://localhost:4200');
//             cy.intercept('POST', 'http://localhost:3000/user/login', {
//                     statusCode: 400
//                     }).as('stubPost')
//         })
            
//     it('Verifica mensagens de campos obrigatórios na página de login', () => {
//             cy.contains('User name is required!').should('be.visible');
//             cy.contains('Password is required!').should('be.visible');
//         })
            
//             it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
//             cy.login('carowl', '12345678')
//                     cy.wait('@stubPost')
//         })
//     })


// Feito isso, teclamos "Ctrl + S" para salvar o código e vamos executá-lo dentro do Cypress.

// Para isso, abrimos o terminal, rodamos o comando npx cypress open e o Cypress será carregado.

// npx cypress open

// Agora, podemos executar o teste dentro da pasta "login-incorreto".

// Ao olhar o relatório do nosso teste, vemos que tudo funcionou corretamente graças ao nosso dublê de teste. Analisando o relatório, perceba que foi feita a interceptação do método POST, além de implementado o erro 400, o que precisávamos que ocorresse para validar o funcionamento do pop-up que aparece avisando que o usuário é incorreto.

// Os dublês de teste servem justamente para isso: quando ainda não temos o final de um código pronto e precisamos simular uma situação com a pessoa usuária. Dessa forma, conseguimos testar mesmo que não esteja pronto ou que não possamos fazer naquele momento com o código que dispomos. Sendo assim, implementamos o dublê de teste e ele supera o nosso erro.

// Tudo correu como esperado, então podemos partir para o próximo teste!


