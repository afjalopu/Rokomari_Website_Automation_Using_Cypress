///<reference types = "Cypress" />

//  export class SelectingBookpage {
//        FirstBookToCart = '(//a[@product-id="17775"])[2]';
//        FirstBookSelect =
//               '(//div[@title="অগ্নিবীণা কাজী নজরুল ইসলাম"]//div//a)[1]';
//        CrossButton = '//button[@class="close js--btn-close-feature-popup"]';

//        SecondBookToCart = '(//a[@product-id="18067"])[1]';
//        SecondBookSelect =
//               '(//div[@title="জিঞ্জীর কাজী নজরুল ইসলাম"]//div//a)[1]';
//        PublishersDiv = '//div[@class="filter-ebook"]';

//        ThirdBookSelect =
//               '(//div[@title="শেষ সওগাত কাজী নজরুল ইসলাম"]//div//a)[1]';
//        ThirdBookToCart = '(//a[@product-id="17781"])[2]';
//        SearchInput = "//input[@id='js--search']";
//        SearchButton = 'button[type = "submit"]';

//        ClickOnCartIcon = "//a[@id='js-cart-menu']";
//        RemoveFirstElement =
//               '//a[@productid="18067"]//img[@src="/static/200/images/icon_trash.png"]';
//        ConfirmRemoveElementByYes = "//button[contains(text(),'হ্যাঁ')]";
//        ClickOnPaceOrderButton = "//span[contains(text(),'Place Order')]";

//        PublishersDivScrolling() {
//               cy.xpath(this.PublishersDiv).scrollIntoView();
//        }

//        SelectingBook() {
//               cy.xpath(this.FirstBookSelect)
//                      .invoke("removeAttr", "target")
//                      .click();
//               cy.reload();
//               cy.xpath(this.FirstBookToCart).click({ force: true });
//               cy.xpath(this.CrossButton).click();
//               cy.go("back");
//               //  this.PublishersDivScrolling();

//               cy.xpath(this.SecondBookSelect)
//                      .invoke("removeAttr", "target")
//                      .click();
//               cy.reload();
//               cy.xpath(this.SecondBookToCart).click({ force: true });
//               cy.wait(1000);
//               cy.reload();
//               cy.go("back");

//               cy.xpath(this.ThirdBookSelect)
//                      .invoke("removeAttr", "target")
//                      .click();
//               cy.reload();
//               cy.xpath(this.ThirdBookToCart).click({ force: true });
//               cy.wait(1000);
//               cy.reload();

//               cy.xpath(this.ClickOnCartIcon).click({ force: true });
//               cy.wait(5000);
//        }
// }
