//  export class GmailSignInPageClass {
//        signIn = "//a[contains(text(),'Sign in')]";
//        Email = "input#j_username";
//        Password = "input#j_password";
//        SignInButton = "//button[contains(text(),'Sign In')]";
//        SignInDiv = "div.login-registration__form--heading";

//        Registration() {
//               cy.xpath(this.signIn).click();
//               cy.get(this.Email).type("afjalsharifautomation@gmail.com");
//               cy.get(this.Password).click({ force: true }).type("AFJALSHARIF");
//               cy.wait(1000);
//               cy.get(this.SignInDiv).scrollIntoView();
//               cy.wait(1000);
//               cy.xpath(this.SignInButton).click({ force: true });
//        }
// }
