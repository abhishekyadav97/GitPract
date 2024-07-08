
class HomePage{

    getName(){
        return cy.get(':nth-child(1) > .form-control')
    }


}

export default HomePage;