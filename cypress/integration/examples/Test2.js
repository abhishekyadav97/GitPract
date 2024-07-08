// Cypress test file or spec file 
/// <reference types="Cypress" /> 
// for cyspress autocompletion

describe('My Second Test suite',()=>{

    it('my Secoind Test case',()=>{


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Practice Page').should('have.text','Practice Page')

        //radoi button
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')

        //check boxes
        cy.get('input[type=checkbox]').check(['option1','option2'])  // get all the check box and check only one and 2 base on value passed in array 


        //Static dropdown 
       // cy.get('select').select('option3').should('have.value','option3') // select the dropdoen value and check if it is selected 
       cy.get('#dropdown-class-example').select('option3').should('have.value','option3') 


       //Dynamic dropdown

       cy.get('#autocomplete').type('ind') // select dynamic drop down and type ind 

       cy.get('.ui-menu-item div').each(($el, index, $list) => {

                if($el.text()==="India")
                {
                   cy.wrap($el).click()
                }
       })

       cy.get('#autocomplete').should('have.value','India')
       
    })

}

)