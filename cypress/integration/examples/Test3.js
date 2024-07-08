
/// <reference types="Cypress" /> 
// for cyspress autocompletion


describe("Test Suite 3",()=>{

    it('Third Test for Alerts and popups',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //alerts 
        cy.get('#alertbtn').click() // alert will be opens and close automatically in cypress \
        cy.get('input[value="Confirm"]').click() // cypress auto handles Alerts and pop up

        //window alert 
        cy.on('window:alert',(str)=>
        {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })


    it('shoud be able to handle child windows',()=>
    {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()  //invoke method to remove the attribute usin removeAttr function target='_balnk' after loading the page so page opens in same tab not in a different tab

        cy.origin('https://www.qaclickacademy.com', () =>   // switching domain to qaClick as the 
        {

        cy.get('#navbarSupportedContent a[href*="about"]').click() // this tab willopen in new domain so we need to tell cypress the domain is changed 

        cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ')

        })


    })



})