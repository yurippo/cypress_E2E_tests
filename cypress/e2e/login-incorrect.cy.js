describe('Login Page', () => {
    it('Verify mandatory fields messages', () => {
      cy.visit('http://localhost:4200/#/home')      
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');      
    })
  })

//One more example

// describe('Login page', () => {

//   beforeEach(() => {
//       cy.visit('http://localhost:4200')
//   })

//   it('Verifica mensagens de campos obrigatórios na página de login', () => {
//           cy.contains('User name is required!').should('be.visible');
//           cy.contains('Password is required!').should('be.visible');       
//   })
      
// })

//Nesse projeto aprendemos
// Criar uma nova suíte de testes;
// Utilizar com mais detalhes as ferramentas de desenvolvedor (DevTools) do navegador para explorar e identificar os elementos
//com que o Cypress irá interagir;
// Utilizar o comando cy.contains() para procurar por um texto dentro de um seletor, facilitando a busca por um elemento;
// Criar novos casos de teste, incluindo a função it(). Não há limites para a quantidade de testes incluídos.
