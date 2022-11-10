///<reference types = "Cypress" />

export class ShippingInformationPage {
       Name = '//div[@class="shipping-form-container"]//input[@name="name"]';
       PhoneNumber = '//input[@name="phone"]';
       AlternativePhoneNum = '//input[@class="js--alternative-phone"]';
       CountryDropDown = "//select[@id='js--country']";
       CityDropDown = "#js--city";
       AreaDropDown = "#js--area";
       ZoneDropDown = "#js--zone";
       Address = '//fieldset//textarea[@name="address"]';
       ClickOnNagadCheckBox = "//input[@id='nagad']";
       ConFirmOrderButton = "//button[@id='js--confirm-order']";
       Scrolling = "//h3[contains(text(),'Shipping Address')]";

       ShippingInformation() {
              cy.xpath(this.Scrolling).scrollIntoView();
              cy.wait(1000);

              cy.xpath(this.Name).clear();
              cy.xpath(this.Name).type("Md. Afjal Sharif");
              cy.xpath(this.PhoneNumber)
                     .click({ force: true })
                     .type("01870866386");
              cy.xpath(this.Scrolling).scrollIntoView();

              cy.xpath(this.AlternativePhoneNum)
                     .click({ force: true })
                     .type("01918899529");
              cy.xpath(this.Scrolling).scrollIntoView();
              cy.screenshot("AlternativePhoneNum");

              cy.get(this.CityDropDown)
                     .select("52", { force: true })
                     .invoke("val")
                     .should("eq", "52");
              cy.xpath(this.Scrolling).scrollIntoView();

              cy.get(this.AreaDropDown)
                     .select("465", { force: true })
                     .invoke("val")
                     .should("eq", "465");
              cy.xpath(this.Scrolling).scrollIntoView();

              cy.get(this.ZoneDropDown)
                     .select("4826", { force: true })
                     .invoke("val")
                     .should("eq", "4826");

              cy.xpath(this.Address)
                     .click({ force: true })
                     .type(
                            "Village: Durgapur, Union: Bolorampur, District: Cumilla, Bangladesh"
                     );
              cy.xpath(this.Scrolling).scrollIntoView();
       }
}
