const el = require('./elements').ELEMENTS

class Signup {

    acessSignUpPage(){
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }


    fillOutForm(){
        cy.get('input[data-test="email"]').type('lllll@lll.com');
        cy.get('input[data-test="fullName"]').type('Lllll Lllll');
        cy.get('input[data-test="registerUserName"]').type('lllllllll');
        cy.get('input[data-test="registerPassword"]').type('LllllLllll');
    }


    submitForm(){
        cy.get('[data-test="btnRegister"]').click();
    }

}

export default new Signup();


// Até agora, conseguimos explorar bastante o projeto AluraPic. Iniciamos com a implementação do código base para nosso primeiro teste e o evoluímos. Também aprendemos a usar os atributos data-test para capturar elementos do CSS presente no código.

// Criamos várias interações e fizemos tanto testes de caminhos felizes, como também caminhos tristes. Interagimos com a API para verificar os dados armazenados no back-end.

// Usaremos agora como exemplo o nosso teste de cadastro-correto.cy.js. Pensando à frente, em algum momento no futuro teremos que implementar provavelmente novos testes na mesma página, conforme o projeto AluraPic for ganhando novas funcionalidades.

// Com isso, poderemos necessitar testar a validação do CAPTCHA ou algo semelhante. Tal cenário implicaria em ter que reescrever algumas partes desse código.

// Por isso, precisamos pensar em como melhorar a manutenção futura dos nossos testes e também evitar a duplicação de código.

// O que fizemos até esse momento foi criar uma função para testar a funcionalidade dos elementos da página de acordo com a interação da pessoa usuária.

// Podemos aprimorar isso da seguinte forma: dentro da pasta "support", criaremos uma nova pasta chamada "pages".

// O que faremos a seguir? Começaremos a separar a lógica de obtenção dos elementos que estamos percorrendo, da parte efetivamente prática - que é a parte de interação da pessoa usuária.

// Dentro do diretório "pages", criaremos um novo diretório chamado "cadastro" considerando que estamos trabalhando exclusivamente com a nossa página de cadastro.

// Nesse diretório que acabamos de criar, precisamos realmente separar a lógica que mencionamos anteriormente. Para isso, dentro de "cadastro", vamos criar um novo arquivo chamado elements.js, onde centralizaremos os elementos que capturamos do CSS.

// Ainda na mesma pasta, criaremos um novo arquivo chamado pagina-cadastro.js. Neste último, centralizaremos a interação que queremos checar durante o teste.

// Centralizar elementos
// Em elements.js, traremos os elementos que capturamos com o atributo data-test que estávamos usando no nosso teste de cadastro-correto.cy.js.

// Para configurar isso, precisamos primeiro definir uma constante chamada const ELEMENTS, onde centralizaremos todos os elementos que definimos. Ela vai ser igual a uma lista, ou seja, abre e fecha chaves.

// Vamos começar a criar essa lista baseada nos nomes dos data-test.

// Para isso, voltamos no arquivo de cadastro-correto.cy.js e copiamos o [data-test="register"]. No arquivo elements.js, digitamos um elemento registerNow, dois-pontos e colamos o elemento copiado entre aspas simples. No final, digitamos uma vírgula e vamos para a linha de baixo.

// O próximo elemento é do e-mail, copiamos novamente o data-test de colchete a colchete. Depois, criamos o campo de email, dois-pontos e colamos o data-set com o nome do elemento entre aspas simples.

// Lembre-se de terminar cada linha com vírgula para adicionar novos elementos.

// Faremos isso com todos os elementos. Confira como ficou o código:

// elements.js:

// const ELEMENTS = {
//     registerNow: '[data-test="register"]',
//     email: '[data-test="email"]',
//     fullName: '[data-test="fullName"]',
//     registerUserName: '[data-test="registerUserName"]',
//     registerPassword: '[data-test="registerPassword"]',
//     btnRegister: '[data-test="btnRegister"]'
// }

// Criamos a lista de elementos e pressionamos "Ctrl + S" para salvar os dados. Com isso, podemos prosseguir para o outro arquivo, pagina-cadastro.js, para começar a criar a interação com esses elementos.

// Centralizar interação
// No arquivo pagina-cadastro.js, precisaremos importar os dados que criamos no arquivo elements.js. Para isso, precisamos tornar esse arquivo elements.js exportável para poder importá-lo de outro lugar.

// Portanto, na frente da constante que criamos na primeira linha, vamos passar o seguinte parâmetro: export const ELEMENTS. Consequentemente, agora podemos importá-lo para dentro do arquivo pagina-cadastro.js.

// export const ELEMENTS = {

//     // código omitido…
    
//     }

    
//     Após salvar o arquivo, podemos exportá-lo para a pagina-cadastro.js ao criar uma nova constante para trazer esses dados do arquivo elements.js.

//     A constante será denominada const el para facilitar a digitação. Vamos atribuir a essa constante uma requisição para o arquivo elements.js. Ou seja, require() e o caminho ./elements entre aspas simples.
    
//     Fora dos parênteses, especificaremos o que queremos trazer dentro desse arquivo. Isto é, .ELEMENTS, que é a constante que criamos lá dentro. Usamos ponto e vírgula para finalizar essa parte do código.

//     pagina-cadastro.js:

//     const el = require('./elements').ELEMENTS;

//     Agora, realmente começaremos a criar a interação que queremos na próxima linha. Para isso, criaremos uma classe para a página de cadastro.

// Digitamos class Cadastro com "C" maiúsculo. Dentro das chaves, vamos digitar a primeira interação que estávamos fazendo no teste.

// Voltamos ao teste de cadastro-correto.cy.js para verificar qual foi a primeira ação que realizamos.

// No caso, a primeira ação foi acessar a página de cadastro, que logamos em localhost:4200 para acessar o site. Depois, clicamos no botão "register" para ir para a página de registro. Esta será a ação que iremos replicar.

// Dentro da classe Cadastro, a primeira ação será a seguinte: vamos criar um método acessarPaginaCadastro(), utilizando o formato camelCase, alternando as palavras com letra maiúscula.

// Dentro deste método, copiaremos os comandos que estão no nosso teste.

// Agora, no nosso teste de cadastro-correto.cy.js, vamos copiar o comando cy.visit() que tem o endereço da página que queremos carregar. Em seguida, vamos colá-lo dentro do método acessarPaginaCadastro().

// Após o comando cy.visit, colocarei um ponto e vírgula para poder passar para a próxima linha de código.

// Depois copiaremos o próximo comando do teste cadastro-correto.cy.js. Para isso, vamos copiar o comando cy.get() onde clicamos no botão de registro para ir para a página de cadastro.

// No arquivo pagina-cadastro.js, vamos colar esse trecho depois do cy.visit().

// const el = require('./elements').ELEMENTS;

// class Cadastro {
//     acessarPaginaDeCadastro() {
//         cy.visit('http://localhost:4200/');
//         cy.get('[data-test="register"]').click();
//     }
// }

// Já criamos a primeira interação com a página de cadastro. Agora precisamos criar um novo método que vai preencher os campos do formulário. Após o fechamento da chave do método acessarPaginaDeCadastro(), vamos dar um "Enter" para criar o próximo método.

// O próximo método será o preencherFormulario(). Da mesma forma, também traremos para dentro desse método os comandos que tínhamos lá no teste de cadastro-correto.cy.js. Assim, podemos copiar todos aqueles comandos do cy.get() que preenchiam os campos do formulário.

// Copiaremos desde data-test de e-mail até o da senha. Após copiar, irei para o arquivo pagina-cadastro.js e colaremos essas linhas dentro do método preencherFormulario().

// Para finalizar, precisamos apenas clicar no botão para enviar o formulário. Darei mais um "Enter" para criar este último método, essa última interação com a página de cadastro.

// Vamos chamá-la de submeterCadastro(). Entre as chaves, vamos colar a ação de clicar no botão com cy.get()do teste cadastro-correto.cy.js.

// const el = require('./elements').ELEMENTS;

// class Cadastro {

// // código omitido…

//     preencherFormulario() {
//         cy.get('input[data-test="email"]').type('lllll@lll.com');
//         cy.get('input[data-test="fullName"]').type('Lllll Lllll');
//         cy.get('input[data-test="registerUserName"]').type('lllllllll');
//         cy.get('input[data-test="registerPassword"]').type('LllllLllll');
//     }

//     submeterCadastro() {
//         cy.get('[data-test="btnRegister"]').click();
//     }
// }

// Com isso, já estamos com tudo planejado e salvo caso precisemos reutilizar o código.

// Afinal, criamos no arquivo elements.js uma base para que esses dados possam ser importados para novos testes. Desse modo, não temos que reescrever tudo.

// Da mesma forma que importamos os elementos do elements.js na página pagina-cadastro.js, posso fazê-lo para novos testes que forem preciso criar.

// Assim, não é necessário recriar tudo manualmente, já está tudo centralizado para apenas reutilizar. Isso facilitará muito nossa rotina.

// Cadastro correto
// Agora, é preciso corrigir o teste cadastro-correto.cy.js usando esses métodos que criamos.

// Primeiro, vamos comentar todos os comandos que tínhamos dentro de it() para, em seguida, trazer os métodos que acabamos de criar e testá-los no Cypress. Para comentar, usamos o atalho "Ctrl + ;".

// Agora, traremos os métodos que criamos em pagina-cadastro.js. Para isso, após a classe Cadastro, damos dois "Enter" e digitamos export default new Cadastro(). Assim, deixamos essa classe disponível para ser reutilizada.

// pagina-cadastro.js:

// // código omitido…

// export default new Cadastro();

// Com isso, podemos levar esses métodos acessarPaginaDeCadastro(), preencherFormulario() e submeterCadastro() para o teste cadastro-correto.cy.js.

// No teste, dentro daquele bloco de it() para preencher os campos do formulário, vamos colocar os métodos. Para chamá-los, precisamos primeiro chamar a classe Cadastro, seguido de ponto e o nome do método.

// Por exemplo, Cadastro.acessarPaginaCadastro(). Depois, faremos o mesmo com os demais métodos.

// Para que a implementação seja válida, é necessário importar a classe do cadastro. Dessa forma, na primeira linha, digitamos import Cadastro, seguido de from, passando o caminho do diretório de onde queremos importar.

// Assim, entre aspas simples, digitamos ../ para navegar entre os diretórios. Em seguida, vamos para a pasta support/pages/cadastro/pagina-cadastro. Feito isso, poderemos salvar o progresso utilizando o comando "Ctrl + S".

// cadastro-correto.cy.js:

// import Cadastro from '../support/pages/cadastro/pagina-cadastro';

// describe('Página de cadastro', () => {

//     beforeEach(() => {
//         cy.visit('http://localhost:4200')
//     }) 
            
//         it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

//             // código comentado omitido…

//             Cadastro.acessarPaginaDeCadastro();
//             Cadastro.preencherFormulario();
//             Cadastro.submeterCadastro();
        
//         })
//   })


//   Com tudo pronto, é fácil verificar se os dados estão corretos nos campos que iremos preencher. Isso é de extrema importância para garantir o cumprimento das exigências de digitação. Este processo nos é bastante familiar, pois já fizemos isso anteriormente.

// Para executar o teste, abrimos o terminal integrado e digitamos o comando para rodar o Cypress, npx cypress open. No Chrome, o teste que vamos executar será o cadastro-correto.

// O Cypress preencheu e alertou que esse usuário já tinha sido usado antes, mas tudo foi preenchido corretamente.

// Qual é a vantagem de utilizarmos o page object? Perceba que temos um código mais bem estruturado e pensado para manutenção.

// Caso seja necessário reutilizar esses elementos, eles estão disponíveis em um objeto que só precisa ser importado. O mesmo ocorre com os elementos que trouxemos para a interação na página de cadastro. Fica mais fácil visualizar onde é preciso corrigir um erro, caso ocorra.

// Ao observar o teste cadastro-correto.cy.js, podemos até apagar as linhas comentadas. Neste código, não precisamos adivinhar ou ler grandes trechos para entender o que está sendo testado.

// Basta ler o it() para saber o que esta função irá realizar e ler o nome dos métodos para entender quais etapas são realizadas.

// Esta prática facilita a nossa vida como pessoas desenvolvedoras e responsáveis pela garantia da qualidade do produto, considerando que o nosso projeto ainda vai crescer muito.

// A AluraPic será um sucesso e terá novas funcionalidades. E estaremos com tudo pronto para receber esse crescimento.

// Desta forma, aprendemos como funciona a estrutura padrão do page object e agora você pode implementar isso em outros projetos.