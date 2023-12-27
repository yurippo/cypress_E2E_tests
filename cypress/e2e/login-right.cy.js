//New Test Code implementing the login Method implemented on the commands.js file

describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.login('catarinap', 'catarina123')
            })

})


//npx cypress run (to run the test on vs code terminal)

//New Test Code implemented

// describe('Login Page', () => {
//         it('Fill out correctly the fields of the login page form to sucessfully login a registered user', () => {
//           cy.visit('http://localhost:4200/#/home') //to open the home page of Alura Pic 
//           cy.get('[data-test="loginUserName"]').type('catarinap') //to get the User Name Element of the Form
//           cy.get('[data-test="loginPassword"]').type('catarina123') //to get the Password Element of the Form
//           cy.contains('button', 'login').click(); //to click on the Register Button to test if it works
//         })
//       })


// My code worked well

// describe('Login Page right ;)', () => {
//     it('Verify mandatory fields messages', () => {
//       cy.visit('http://localhost:4200/#/home')      
//       cy.get('input[data-test="loginUserName"]').type('catarinap');    
//       cy.get('input[data-test="loginPassword"]').type('catarina123');
//       cy.get('[data-test="loginBtn"]').click();   
//     })
//   })


//User Name Field
// <input autofocus="" class="form-control ng-pristine ng-invalid ng-touched" data-test="loginUserName" formcontrolname="userName" placeholder="user name" ng-reflect-name="userName">

//Password Field
// <input class="form-control ng-pristine ng-invalid ng-touched" data-test="loginPassword" formcontrolname="password" placeholder="password" type="password" ng-reflect-name="password">

//Login Button

//<button class="btn btn-primary btn-block" data-test="loginBtn" type="submit" disabled=""> login </button>