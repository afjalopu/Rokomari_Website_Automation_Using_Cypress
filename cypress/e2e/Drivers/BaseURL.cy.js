export class BaseURLClass {
       url = "https://www.rokomari.com/book";

       URL() {
              Cypress.on("uncaught:exception", (err, runnable) => {
                     return false;
              });

              cy.visit(this.url);
              cy.url().should("include", "rokomari");
              cy.url().should("eq", "https://www.rokomari.com/book");
              cy.url().should("contain", "rokomari");
       }
}
