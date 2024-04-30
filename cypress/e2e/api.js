// API

import { appendFile } from "graceful-fs"

// O termo API (Application Programming Interface ou, em português, Interface de Programação de Aplicações) é amplamente utilizado quando se trata de desenvolvimento e teste de software. É muito importante que você conheça esses principais termos, entenda-os melhor, para que possa sempre estar antenado às melhorias referentes a esses assuntos quando houver novas versões do Cypress.

// Para aprofundar seus conhecimentos e entender mais a fundo o significado desse tipo de tecnologia, confira o Alura+ “O que é uma API”.

// https://cursos.alura.com.br/extra/alura-mais/o-que-e-uma-api--c697

// É muito comum uma API ser definida como uma API REST. O REST é um acrônimo para Representational State Transfer. Para entender mais a fundo o significado desse termo, confira o artigo REST: Conceito e fundamentos.

// https://www.alura.com.br/artigos/rest-conceito-e-fundamentos?_gl=1*1xzulwp*_ga*Mjg2MzU5OTU0LjE3MDc3NzE3MzU.*_ga_1EPWSW3PCS*MTcxNDQyNTI1MS40MC4xLjE3MTQ0MjU1OTYuMC4wLjA.*_fplc*Rnd1UiUyQnpXcDF0eVFyZ2IxJTJGRUNXaGF5eHc2JTJCNFloaDZmWXFXN3ZkJTJCT0h6aWElMkI0V3RpcHVGNzRwdmlNRlpwdWNOWE9pVFlVOXUlMkZTTjVFJTJGWUJWaUklMkZHRnFXdFRTWXY1dlclMkZhaG5jck80Q2RFQnNTWk5SU3dWeEJLcUFSJTJGRXclM0QlM0Q.


// Nessa parte do projeto, aprendemos como observar e interagir diretamente com a API, e a observar as requisições sendo realizadas diretamente na ferramenta de desenvolvedor.

// Também entendemos como implementar o page object model, um padrão de estrutura com um alto nível de abstração que ajuda na manutenção e cobertura de testes em projetos escaláveis.

// Tambem Reproduzimos o teste para verificar se as imagens que um usuário inseriu no AluraPic estão disponíveis na API e reestruturamos o projeto seguindo o padrão de page object model.

// Exemplo fazendo o teste da API 

// Antes de indicar o teste, insira algumas imagens no AluraPic com um usuário que você mesmo criou.

// Faça os testes em API’s REST, verificando o status e corpo da resposta, bem como outros comportamentos:

// describe('Buscar fotos e dados', () => {

//     it('buscar fotos do usuário', () => {
//         cy.request({
//             method: 'GET' ,
//             url: 'http://localhost:3000/user/photos'
//         }).then((res) => {
//             expect(res.status).to.be.equal(200)
//             expect(res.body).is.not.empty
//             expect(res.body[0]).to.have.property('description')
//             expect(res.body[0].description).to.be.equal('')
            
//         })
//     })
// })


// Remodelando no padrão page object
// Remodele o teste da página de cadastro utilizando page object model, centralizando os elementos e comportamentos que eram compartilhados por testes de uma mesma página do AluraPic em classes para que as mesmas fossem importadas posteriormente, evitando a reescrita de código e diminuindo a complexidade de manutenção.

// Para isso, dentro da pasta support criamos uma nova pasta chamada pages e dentro da nova pasta criamos uma pasta chamada cadastro. Na pasta cadastro criamos os arquivos elements.js e pagina-cadastro.js.

// No arquivo elements.js centralizamos os seletores de CSS que utilizamos nas nossas interações, e ele ficou assim:

// export const ELEMENTS = {
//     registerNow: '[data-test="register"]',
//     email: '[data-test="email"]',
//     fullName: '[data-test="fullName"]',
//     registerUserName: '[data-test="registerUserName"]',
//     registerPassword: '[data-test="registerPassword"]',
//     btnRegister: '[data-test="btnRegister"]' 
    
// }

// No arquivo pagina-cadastro.js nós organizamos as interações realizadas com a página de cadastro:

// const el = require('./elements').ELEMENTS;

// class Cadastro {
//     acessarPaginaDeCadastro(){
//         cy.visit('http://localhost:4200/');
//         cy.get('[data-test="register"]').click();
//     }

//     preencherFormulario(){
//         cy.get('input[data-test="email"]').type('lllll@lll.com');
//         cy.get('input[data-test="fullName"]').type('Lllll Lllll');
//         cy.get('input[data-test="registerUserName"]').type('lllllllll');
//         cy.get('input[data-test="registerPassword"]').type('LllllLllll');
//     }

//     submeterCadastro(){
//         cy.get('[data-test="btnRegister"]').click();
//     }
// }

// export default new Cadastro();

// E por fim, reestruturamos o teste cadastro-correto.cy.js utilizando os métodos que criamos no arquivo pagina-cadastro.js:

// import Cadastro from '../support/pages/cadastro/pagina-cadastro'

// describe('Página de cadastro', () => {

//     beforeEach(() => {
//       cy.visit('http://localhost:4200/')
//     })
        
//         it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
          
//           Cadastro.acessarPaginaDeCadastro();
//           Cadastro.preencherFormulario();
//           Cadastro.submeterCadastro()
          
//         })
//     })
  
// Alguns outros pontos relevantes

// - Realizar requisições para a API para validar dados do usuário;
// - A importância de identificar e corrigir flaky tests;
// - Implementar o padrão Page Object para aprimorar a manutenção de testes e reduzir a duplicação de código.
