describe('Singup Page', () => {
    it('Fill out incorrectly the fields of the singup page form to unsucessfully register a new user ;(', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
      
    })
  })

//   Para saber mais: pirâmide de testes

// Entender a importância dos testes no desenvolvimento de software e como eles devem ser estruturados com certeza é um diferencial na hora de automatizá-los. 
// Caso queira saber mais e complementar seus estudos, você pode acessar o Alura+ Entenda a pirâmide de teste, que detalha brevemente os tipos diferentes de testes automatizados e como eles posicionam na pirâmide.

//https://cursos.alura.com.br/extra/alura-mais/entenda-a-piramide-de-teste-c206

//Para saber mais: continuous testing

// O conceito e a aplicação de testes automatizados, que são tão importantes no processo de desenvolvimento de software, devem estar presentes em todas as etapas idealmente, desde a concepção da aplicação a ser desenvolvida. Você pode acessar o Alura+ O que é Continuous Testing? que aborda esse tópico.

// https://cursos.alura.com.br/extra/alura-mais/o-que-e-continuous-testing--c1144