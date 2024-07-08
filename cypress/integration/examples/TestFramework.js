/// <reference types="Cypress" /> 
// for cyspress autocompletion

import HomePage from "../pageObjects/HomePageObjects"   // Importing Home page object s so that methods of those class can be accessed 

describe("Test Frameowork",()=>{

    before( function(){
        //runs before all test cases in the block
        cy.fixture('example').then(function(data) 
        {       //calling fixture files and .then resolving the promise and storring all the data in 'data'

            this.data=data      //using this keyword to store the data from local to global level so that it can be used outside before
        })
    }) 

    it('Test Framework first Test',function(){

       const homePageObj = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePageObj.getName().type(this.data.name) // this.data.getting name from the example json file 
        cy.get('select').select(this.data.gender)
        cy.get('input[name="email"]').type(this.data.email)

        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName.forEach(function(element){

            cy.selectProduct(element)

        });
      //  f


      //  cy.selectProduct("Nokia")
       // cy.selectProduct("Samsu")

    })

    // it('Testr to navigate to Shop and select a product',function(){




    // })

})