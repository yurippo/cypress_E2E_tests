Cypress.Commands.add('login', (username, password) => {
    cy.get('input[data-test="loginUserName"]').type(username)
    cy.get('input[data-test="loginPassword"]').type(password)
    cy.get('button[type=submit]').click()
  })


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Comandos básicos do Cypress

// Mariana, que trabalha como Quality Assurance em uma empresa de software, está implementando uma nova suíte de testes para um site de pagamentos online. Ela precisa criar alguns casos de teste para verificar a interface de acordo com as diversas formas de pagamento que podem ser selecionadas. Se for selecionado boleto, deverá mostrar a opção para download do mesmo. Se for selecionado cartão de crédito ou débito, deverão aparecer os campos a serem preenchidos referente ao cartão. E assim sucessivamente.

// boas práticas que podem ser utilizadas na criação desta suíte de testes:


// A cada novo caso de teste descrito com it(), deverá ser criado uma linha cy.visit() para indicar a URL inicial da página?
// Apesar de funcionar, quando o volume de testes for aumentando, acarretará lentidão. Além disso, caso seja necessário um ajuste na URL, precisaremos alterar em muitos pontos. O ideal é usar a função beforeEach e discriminar ali a URL inicial dos testes.

// quebrar cada tipo de pagamento em um novo caso de teste com o comando it() ?
// é importante que haja uma independência entre os testes. Apesar de todos terem relação com o mesmo contexto, um teste de boleto não deverá afetar um outro teste de cartão, por exemplo.

// Podemos utilizar o Selector Playground para verificar diferentes cenários de teste em um único ambiente de desenvolvimento?
// Essa descrição não é precisa. O Selector Playground não tem como função verificar diferentes cenários de teste. Ele se concentra em auxiliar na criação e validação de seletores CSS eficientes.

// Utilizar seletores com tags de data-test, ou utilizar contains() para os seletores de CSS ?
// O uso do contains() é considerado pelo Cypress como uma boa prática, porque o nome daquele botão ou link precisa fazer sentido com a ação que ele faz.

// Para saber mais: Testes de componente x Testes E2E

// Os testes de componente são usados para testar componentes individuais do software de forma isolada. Isso permite que os desenvolvedores testem as funcionalidades de um componente específico sem depender de outros componentes ou módulos do software. Eles costumam ser mais rápidos de se executar e mais fáceis de depurar.

// Já os testes End-to-End(E2E) são usados para testar a integração de várias partes do software em um fluxo completo de uso. Eles simulam a interação do usuário com o software, verificando se as várias partes do sistema funcionam em conjunto de maneira adequada. Os testes E2E são mais lentos e difíceis de depurar do que os testes de componente, mas fornecem uma visão geral do funcionamento do software como um todo.

//uma nova busca por outro conteúdo

// utilizamos tanto o Selector Playground quanto às ferramentas de desenvolvedor do Google Chrome (DevTools) para identificar o nome dos elementos que contêm a descrição do curso que desejamos localizar e a lupa onde fazemos o clique. Substituímos o código inicial gerado pelo Selector Playback, componente que tem no CLI do Cypress, e fizemos alguns ajustes.

// Andamento do projeto de acordo com o que fizemos até o momento:

// Primeiramente criamos uma nova pasta chamada CYPRESS_E2E_TESTS e a abrimos no VS Code, depois abrimos um terminal e instalamos o Cypress com o comando npm install cypress --save-dev.

// Após a instalação executamos o Cypress digitando no terminal o comando npx cypress open.

// Na interface do cypress criamos um novo arquivo com o nome testing.cy.js, neste arquivo tínhamos o seguinte código que foi criado pelo Cypress como estrutura padrão:

// describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://example.cypress.io')
//     })
//   })

//   Para que ele se tornasse aplicável ao nosso cenário de teste nós então realizamos modificações incluindo o endereço da nossa aplicação e também utilizamos o Selector Playground para identificar os seletores de CSS dos elementos da página que iremos interagir, após essas modificações o código então ficou assim:

//   describe('Signup Page', () => {
//     it('Fill out correctly the fields of the singup page form to sucessfully register a new user', () => {
//       cy.visit('http://localhost:4200/#/home') //to open the home page of Alura Pic 
//       cy.contains('a', 'Register now').click(); //to click on the Register now Link to test if it works
//       cy.get('[data-test="email"]').type('catarina@email.com.br')//to get the Email Element of the Form
//       cy.get('[data-test="fullName"]').type('Catarina Pessoa')//to get the Full Name Element of the Form
//       cy.get('[data-test="registerUserName"]').type('catarinap') //to get the User Name Element of the Form
//       cy.get('[data-test="registerPassword"]').type('catarina123') //to get the Password Element of the Form
//       cy.contains('button', 'Register').click(); //to click on the Register Button to test if it works
//     })
//   })

//Ja sabemos a estrutura básica para criarmos nossos próximos testes tambem


// aprendemos no projeto como:
// Iniciar um novo projeto usando o NodeJS, através do comando npm init, inicializando o arquivo package.json;

// Criar um novo arquivo de teste, com extensão .spec.js dentro da pasta integration e utilizar o comando describe para descrever a suíte de testes;

// Criar um novo caso de teste utilizando a função it e utilizar os recursos cy.get(), bem como as opção .type, .click;
// Usar as ferramentas de desenvolvedor para melhor identificar os elementos HTML da página.

//Como preparar o ambiente do projeto

// O Cypress é um framework para automação de testes end-to-end, que utiliza o JavaScript como linguagem de programação. Para este curso, precisaremos instalar duas ferramentas: o NodeJS, necessário para executar código JavaScript, e o Visual Studio Code ou VSC, editor que usamos para escrever código.

// Para começarmos, é importante que você tenha essas ferramentas instaladas na sua máquina. Caso não tenha, use os links abaixo para fazer o download:

// Node.js
// VScode
// Você pode acompanhar o passo a passo da instalação caso não possua esses programas no seu computador.

// Node.js
// Caso já tenha feito algum curso anterior de JavaScript para back-end, o Node.js pode já estar instalado no seu computador. Se não tiver certeza, é possível conferir com os seguintes passos:

// 1 - Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

// Windows: você pode acessar a busca no menu Iniciar e procurar por “prompt de comando”, ou acessar via Menu Iniciar > Sistema do Windows > Prompt de Comando.

// MacOs: O Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.

// Linux (Ubuntu): O Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

// 2 - No terminal, digite node --version ou node -v -. Caso retorne um número de versão, por exemplo, v16.13.1, o Node.js já está instalado.

// Caso não esteja instalado, você pode seguir o passo a passo do artigo “Como instalar o Node.js no Windows, Linux e macOS”!

// Visual Studio Code (VSC)
// O Visual Studio Code(VSC) é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de acordo com o seu sistema operacional estão na página inicial do VSC.

// Se você possui esses programas instalados no seu sistema operacional, bora começar!

// Instalando o Cypress
// Para instalar exatamente a mesma versão do Cypress que utilizamos durante o curso, vamos abrir o terminal integrado do VS Code, pressionando "Ctrl + J". Em seguida, vamos executar o seguinte comando:

// npm install cypress@12.10.0 --save-dev


// Finalizada a instalação, precisamos subir a interface de usuário do próprio Cypress para explorarmos como ele funciona. Para isso, vamos executar o seguinte comando:

// npx cypress open

// A janela da interface de usuário do Cypress será aberta.

// Qual é o projeto deste curso?
// Vamos realizar testes funcionais no site AluraPic, criado para armazenar imagens.

// Para acessar o projeto de forma remota:
// Caso prefira acessar o projeto de forma remota, você pode acessar o site do Alurapic.

// https://3076-cypress-alurapic-front.vercel.app/#/home

// Neste caso, lembre-se de substituir a URL utilizada em vídeo. Ao invés de utilizar o endereço http://localhost:4200/ na criação dos testes, você deverá utilizar a URL https://3076-cypress-alurapic-front.vercel.app/.

// Como executar o projeto localmente:
// Durante o curso o AluraPic foi executado localmente, caso você queira fazer da mesma forma atente-se aos passos, descritos abaixo:

// *Para executar o projeto com sucesso você deve utilizar a versão 16.13.1 do Node.js.

// Para instalar a versão 16.13.1 você vai precisar do Node Version Manager(NVM), que é um gerenciador de versões do Node.js. No artigo Node.js: Descomplicando o trabalho com diferentes versões você encontra o passo a passo para utilizar o NVM.

// https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node?_gl=1*1apyjcd*_ga*MTI5NDc2NTA1MS4xNjgzNTkyNDg4*_ga_1EPWSW3PCS*MTcwMjQ1MjQwOC4xNDcuMS4xNzAyNDU1MDY3LjAuMC4w*_fplc*WHB4cEphQ3FpQzRyNUZDcmFWc1ZGMGNiRE1lUmxXSzV2dHBmMUYzN01zV0FEJTJCVUc0YUJrck4lMkJycDJMazVXcmNyVVBJU3hXb1hEWHFSbjZkQ2ZpbEtSWXhVZThoM0JJMnpmRGVyUlJ1UUFmcHRDTEVDTUJUZmwwZ1A1dk5RQSUzRCUzRA..

// Importante: caso seu sistema operacional seja Windows você pode utilizar o WSL para acompanhar o projeto e trabalhar com o versionamento de linguagens como Node.js. Temos um vídeo sobre WSL e um artigo sobre WSL para explicar seus usos e como instalar.

// Após a instalação do WSL, você deve então realizar a instalação do Node Version Manager(NVM), e instalar a versão 16.13.1 do Node.

// Uma outra opção é utilizar o NVM for Windows, uma ferramenta que permite realizar o versionamento do Node.js sem a utilização do WSL. Para usá-lo basta realizar o download do instalador, executar o instalador após o download, e depois disso executando o prompt de comando do Windows como administrador você deverá executar os comandos nvm install 16.13.1 e depois que a instalação da versão escolhida for concluída execute nvm use 16.13.1

// Também é possível realizar o gerenciamento de versões do Node.js utilizando o ASDF, uma outra opção ao NVM

// Sendo assim, teremos o código já implementado para podermos focar no essencial: os nossos testes, e você pode fazer o download do AluraPic.
// https://github.com/alura-cursos/alurapic/archive/refs/heads/main.zip

// Depois disso você deve abrir a pasta do projeto no terminal do Linux onde configuramos a versão do Node e digitar nele os comandos npm install e depois npm start para iniciar o projeto localmente, você poderá acessá-lo em seu navegador na porta http://localhost:4200/.

 