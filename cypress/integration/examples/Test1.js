// Cypress test file or spec file 
/// <reference types="Cypress" /> 
// for cyspress autocompletion

describe('My first test suite',()=>{    // function() or ()=> function without name is also function

    it('First Test to search for vegitables',function () {
        //Tst1

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input[type='search']").type('Ca')  // get acts as find element 

        cy.get('.product:visible').should('have.length',4) //."should" assertion fo chai   
        //.product class name ":visible" to get the elements that are visible
        //we can see every step with screenshots to know what happened
        cy.get('.products').find('.product').should('have.length',4) // '.produtcs pranet class .find used to search child element whithin the class' - parent child chaining
      
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()// .eq to select the index 1 inarray  containd to find element using containing certain keywords
        
        cy.get('.products').find('.product').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            const textVeg=$el.find('h4.product-name').text()
            if (textVeg.includes('Cashew')) {
            
                cy.wrap($el).find('button').click()
            
            }
            if
            (textVeg.includes('Capsi')) {
            
                cy.wrap($el).find('button').click()
        
            }
          }) 
        
          //"".as('locatorname')" function to alias to reuse locator and pass the locator as cy.get(@locatorname) to avoid changing or adding same locator in multiple place


        cy.get('.brand').should('have.text','GREENKART') // assertion on logo text
        cy.get('.brand').then(function(logoElement){    // handling promises using then ()

            cy.log(logoElement.text())
        })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


      
    })
   
}



)