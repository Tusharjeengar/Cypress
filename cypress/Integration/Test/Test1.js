// Cypress Spec

describe('My Test Suite',function(){

it('My first test case',function(){


//TestSteps
  cy.visit("ci11.avis.com");
  cy.wait(200);
  cy.get('.generic-modal > .text-center > .noMar > .close-icon-black').click();
  cy.wait(200);
  cy.get('.col-xs-6 > #PicLoc > .angucomplete-holder > #PicLoc_value').type('DFW');
  cy.get('#res-home-select-car').click();

})

// it('My Second Testcase ',function(){


//     cy.visit("qa4.avis.com")
// })

})