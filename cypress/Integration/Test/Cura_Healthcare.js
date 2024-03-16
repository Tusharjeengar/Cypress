
describe('My Test Suite',function(){

    it('My first test case',function(){
    
    
    //TestSteps
    
      cy.visit("https://katalon-demo-cura.herokuapp.com");
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type("John Doe");
      cy.get('#txt-password').type("ThisIsNotAPassword");
      cy.get('#btn-login').click();
      
// cy.on('window:alert',function(AlertText) // for alert type

// {expect(AlertText).eql('OK');

// })
//   cy.contains('OK').click();
// cy.on('window:confirm',function(alert){
//     return false;
// })
// cy.contains('password').click();


      cy.get('#txt_visit_date').type("12/4/24");
     // cy.get('.form-horizontal > :nth-child(5)').click();
    //  cy.get('#txt_comment').type("Test case Completed");
      cy.get('#btn-book-appointment').click();
      
     
    })
})