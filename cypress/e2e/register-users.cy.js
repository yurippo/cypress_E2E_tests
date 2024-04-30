
describe('Singup Page', () => {
  
    
 beforeEach(() => {

    cy.visit('http://localhost:4200/')
 })

    const users = require('../fixtures/users.json') //Code to grab the users from my json file in the fixtures folder
    users.forEach(user => { 
        
        it('Fill out correctly the fields of the singup page form to sucessfully register a new user', () => {
        
        cy.get('[data-test="register"]').click();
        cy.get('input[data-test="email"]').type(user.email);
        cy.get('input[data-test="fullName"]').type(user.fullName);
        cy.get('input[data-test="registerUserName"]').type(user.userName);
        cy.get('input[data-test="registerPassword"]').type(user.password);
        cy.get('[data-test="btnRegister"]').click();
    })

})  
    
   
  })
  


//   Até o momento, já aprendemos a aplicar em nosso projeto algumas boas práticas de desenvolvimento, como a criação de testes e a proteção de dados sensíveis. O próximo passo será simular a seguinte situação: imagine que no AluraPic seja necessário simular o uso simultâneo de vários usuários realizando login ou cadastro. Diante disso, não seria muito prático recrutar várias pessoas para fazer isso ao mesmo tempo, nem seria ideal criar um por um manualmente. Para suprir essa necessidade, podemos usar uma massa de dados.

// No Cypress, para implementar essa massa de dados, criaremos um novo arquivo dentro do diretório "fixtures". Vamos nomeá-lo como "usuarios.json".

// Nele, adicionaremos uma lista com todos os usuários que pretendemos cadastrar de uma vez no AluraPic. Temos uma lista pronta, então vamos copiá-la para este arquivo.

// [
//     {
//       "email": "peter.quill@alura.com.br",
//       "fullName": "Peter Jason Quill",
//       "userName": "senhor_das_estrelas",
//       "password": "hibrido"
//     },
//     {
//       "email": "gamora@alura.com.br",
//       "fullName": "Gamora Zen Whoberi Ben Titan",
//       "userName": "gamora",
//       "password": "zenwhoberi"
//     },
//     {
//       "email": "rocket.raccoon@alura.com.br",
//       "fullName": "Rocket Raccoon",
//       "userName": "rocket",
//       "password": "mamifero"
//     },
//     {
//       "email": "groot@alura.com.br",
//       "fullName": "Groot",
//       "userName": "groot",
//       "password": "colossusfloral"
//     }
//     ,
//     {
//       "email": "drax@alura.com.br",
//       "fullName": "Drax",
//       "userName": "drax",
//       "password": "humanoreforcado"
//     },
//     {
//       "email": "youndu@alura.com.br",
//       "fullName": "Yondu Udonta",
//       "userName": "youndu",
//       "password": "centauriano"
//     }
//   ]

//   Agora, vamos configurar como usar esse arquivo em nosso código. Utilizaremos o teste "data-testes.cy.js", que implementamos anteriormente, criando o cadastro dos usuários. Começaremos fazendo algumas alterações na estrutura para ler o conteúdo do arquivo.

// Dentro da arrow function, antes da função it(), criaremos uma variável onde vamos armazenar os dados do arquivo que criamos para usar no código. A nomearemos como usuarios e ela vai requerer os dados do arquivo, então passamos require(). Para require() passamos, entre aspas simples, o caminho para o arquivo a ser acessado.

// describe('Página de cadastro', () => {

//     const usuarios = require('../fixtures/usuarios.json');
    
//     it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//         cy.visit('http://localhost:4200/');
//         cy.get('[data-test="register"]').click();
//         cy.get('input[data-test="email"]').type('11111@111.com');
//         cy.get('input[data-test="fullName"]').type('L1111 L1111');
//         cy.get('input[data-test="registerUserName"]').type('111111111');
//         cy.get('input[data-test="registerPassword"]').type('L111111111');
//         cy.get('[data-test="btnRegister"]').click();
//     })
// })

// O próximo passo será criar o objeto que estaremos usando mais tarde nos campos de input dos formulários. Para isso, vamos passar usuarios, que é o nome do arquivo que queremos acessar, e .forEach(usuario), que é onde queremos que os dados sejam carregados.

// Vamos criar uma nova arrow function e passar a função it() completa para dentro do parâmetro que passamos, pois essa informação será usada para preencher os dados do formulário.

// describe('Página de cadastro', () => {
//     const usuarios = require('../fixtures/usuarios.json');

//     usuarios.forEach(usuario => {
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//             cy.visit('http://localhost:4200/');
//             cy.get('[data-test="register"]').click();
//             cy.get('input[data-test="email"]').type('11111@111.com');
//             cy.get('input[data-test="fullName"]').type('L1111 L1111');
//             cy.get('input[data-test="registerUserName"]').type('111111111');
//             cy.get('input[data-test="registerPassword"]').type('L111111111');
//             cy.get('[data-test="btnRegister"]').click();
//         })
//     })
// })


// Porém, não faz sentido que cy.visit() fique dentro, então vamos recortá-lo.

// describe('Página de cadastro', () => {
//     const usuarios = require('../fixtures/usuarios.json');

//     usuarios.forEach(usuario => {
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//             cy.get('[data-test="register"]').click();
//             cy.get('input[data-test="email"]').type('11111@111.com');
//             cy.get('input[data-test="fullName"]').type('L1111 L1111');
//             cy.get('input[data-test="registerUserName"]').type('111111111');
//             cy.get('input[data-test="registerPassword"]').type('L111111111');
//             cy.get('[data-test="btnRegister"]').click();
//         })
//     })
// })


// Implementaremos o beforeEach(), que já tínhamos criado anteriormente em outras estruturas. Lembre-se que esta estrutura foi a primeira que criamos para acessar a página de cadastro quando começamos nosso teste.

// Dentro, colocaremos uma arrow function que conterá o trecho de cy.visit() que recortamos.

// describe('Página de cadastro', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:4200/')
//     })

//     const usuarios = require('../fixtures/usuarios.json')

//     usuarios.forEach(usuario => {
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//             cy.get('[data-test="register"]').click();
//             cy.get('input[data-test="email"]').type('11111@111.com');
//             cy.get('input[data-test="fullName"]').type('L1111 L1111');
//             cy.get('input[data-test="registerUserName"]').type('111111111');
//             cy.get('input[data-test="registerPassword"]').type('L111111111');
//             cy.get('[data-test="btnRegister"]').click();
//         })
//     })
// })

// Agora podemos substituir os dados que estão nos campos dos inputs pelo que colocamos no arquivo que criado. No campo input data-teste="email" chamaremos usuario.email como parâmetro. Dessa forma, ele buscará, dentro do arquivo JSON, os dados desse usuário, neste caso, o e-mail.

// describe('Página de cadastro', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:4200/')
//     })

//     const usuarios = require('../fixtures/usuarios.json')

//     usuarios.forEach(usuario => {
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//             cy.get('[data-test="register"]').click();
//             cy.get('input[data-test="email"]').type(usuario.email);
//             cy.get('input[data-test="fullName"]').type('L1111 L1111');
//             cy.get('input[data-test="registerUserName"]').type('111111111');
//             cy.get('input[data-test="registerPassword"]').type('L111111111');
//             cy.get('[data-test="btnRegister"]').click();
//         })
//     })
// })


// Faremos o mesmo com os outros campos. Para o campo fullName, colocaremos usuario.fullName; para registerUserName, passaremos usuario.userName; já em registerPassword, colocaremos usuario.password.

// describe('Página de cadastro', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:4200/')
//     })

//     const usuarios = require('../fixtures/usuarios.json')

//     usuarios.forEach(usuario => {
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//             cy.get('[data-test="register"]').click();
//             cy.get('input[data-test="email"]').type(usuario.email);
//             cy.get('input[data-test="fullName"]').type(usuario.fullName);
//             cy.get('input[data-test="registerUserName"]').type(usuario.userName);
//             cy.get('input[data-test="registerPassword"]').type(usuario.password);
//             cy.get('[data-test="btnRegister"]').click();
//         })
//     })
// })

// Vamos teclar "Ctrl + S" para salvar.

// Agora, vamos rodar esse teste. No terminal, executamos o comando npx cypress open:

// npx cypress open

// Em seguida, no Cypress, vamos em "data-testes" e vemos que ele já está carregando. Se aumentarmos a tela, podemos observar que estão sendo usados exatamente os dados que colocamos dentro do arquivo JSON. Isso é útil para quando precisamos simular vários usuários simultaneamente em nossa plataforma ou até mesmo quando queremos testar outro tipo de validação.

// Dessa forma, reduzimos o tempo que seria gasto na criação manual, especialmente quando já se possui uma lista de usuários para adicionar, supondo, por exemplo, que você é uma pessoa administradora da plataforma e vai realizar a administração de usuários com permissão apenas de usuário comum. Além de poupar tempo, ajuda na prevenção de erros de digitação caso seja necessário repetir o processo, pois é possível simplesmente reutilizar esse conjunto de dados.

// Para saber mais: melhores práticas de escrita

// Na documentação no Cypress,

// https://docs.cypress.io/guides/references/best-practices

// tem um compilado de boas práticas referentes à escrita dos testes. Essas sugestões e melhorias que a documentação apresenta, geralmente são embasadas no feedback da comunidade que utiliza a ferramenta diariamente, sejam profissionais de QA (quality assurance), quanto pessoas desenvolvedoras front-end, que também fazem muito uso do Cypress em seus testes. Sendo assim, vale a pena conferir os exemplos do que usar ou não na elaboração do script e sempre levar em consideração a documentação oficial como material de apoio.