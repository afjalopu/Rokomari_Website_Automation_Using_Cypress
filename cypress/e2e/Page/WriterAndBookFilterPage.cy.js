///<reference types = "Cypress" />

export class WriterAndBookFilterClass {
       //  **** Gmail LogIn ****
       signIn = "//a[contains(text(),'Sign in')]";
       Email = "input#j_username";
       Password = "input#j_password";
       SignInButton = "//button[contains(text(),'Sign In')]";
       SignInDiv = "div.login-registration__form--heading";

       // **** Writer And Book Filter ****
       SearchInput = "//input[@id='js--search']";
       SearchButton = 'button[type = "submit"]';
       BestSellerCheckBox = "//label[contains(text(),'Best Seller')]";
       FilterCheckBox_1 = "//label[contains(text(),'বাংলা কবিতা')]";
       Catagories_Div = '//div[@class="filter"]';
       FilterCheckBox_2 = "//label[contains(text(),'রচনা সংকলন ও সমগ্র')]";
       PublishersDiv = '//div[@class="filter-ebook"]';
       PublishersCheckBox_1 = "//label[contains(text(),'নজরুল ইন্সটিটিউট')]";
       PublishersCheckBox_2 = "//label[contains(text(),'আগামী প্রকাশনী')]";
       PublishersCheckBox_3 = "//label[contains(text(),'মাওলা ব্রাদার্স')]";
       BanglaLanguage = '//label[@for="languageIds_1"]';
       FiveStarRating = '//label[@for="rating_5"]';

       // **** Add To Cart ****
       FirstBookToCart = '(//a[@product-id="17775"])[2]';
       FirstBookSelect =
              '(//div[@title="অগ্নিবীণা কাজী নজরুল ইসলাম"]//div//a)[1]';
       CrossButton = '//button[@class="close js--btn-close-feature-popup"]';
       SecondBookToCart = '(//a[@product-id="18067"])[1]';
       SecondBookSelect =
              '(//div[@title="জিঞ্জীর কাজী নজরুল ইসলাম"]//div//a)[1]';
       PublishersDiv = '//div[@class="filter-ebook"]';
       ThirdBookSelect =
              '(//div[@title="শেষ সওগাত কাজী নজরুল ইসলাম"]//div//a)[1]';
       ThirdBookToCart = '(//a[@product-id="17781"])[2]';
       SearchInput = "//input[@id='js--search']";
       SearchButton = 'button[type = "submit"]';
       ClickOnCartIcon = "//a[@id='js-cart-menu']";
       RemoveFirstElement =
              '//a[@productid="18067"]//img[@src="/static/200/images/icon_trash.png"]';
       ConfirmRemoveElementByYes = "//button[contains(text(),'হ্যাঁ')]";
       ClickOnPlaceOrderButton = "//span[contains(text(),'Place Order')]";

       CatagoriesDivScrolling() {
              cy.xpath(this.Catagories_Div).scrollIntoView();
       }

       WriterAndBookFiltering() {
              // Gmail Login
              cy.xpath(this.signIn).click();
              cy.get(this.Email).type("afjalsharifautomation@gmail.com");
              cy.get(this.Password).click({ force: true }).type("AFJALSHARIF");
              cy.wait(1000);
              cy.get(this.SignInDiv).scrollIntoView();
              cy.wait(1000);
              cy.xpath(this.SignInButton).click({ force: true });

              // **** Writer and Book Filtering ****
              cy.xpath(this.SearchInput).type("কাজী নজরুল ইসলাম");
              cy.wait(3000);
              cy.get(this.SearchButton).click({ force: true });

              cy.xpath(this.BestSellerCheckBox).should("be.visible");
              cy.wait(3000);
              cy.xpath(this.BestSellerCheckBox).click({ force: true });

              cy.xpath(this.FilterCheckBox_1).click({ force: true });
              this.CatagoriesDivScrolling();
              cy.wait(5000);

              cy.xpath(this.FilterCheckBox_2).click({ force: true });
              cy.wait(1000);
              this.CatagoriesDivScrolling();

              cy.wait(1000);
              cy.xpath(this.PublishersCheckBox_1).click({ force: true });
              cy.wait(1000);

              cy.xpath(this.PublishersCheckBox_2).click({ force: true });
              cy.wait(1000);

              cy.xpath(this.PublishersCheckBox_3).click({ force: true });
              cy.wait(1000);

              cy.xpath(this.BanglaLanguage).click({ force: true });
              cy.wait(1000);

              cy.xpath(this.FiveStarRating).click({ force: true });
              cy.wait(1000);

              // **** Selecting Book ****
              cy.xpath(this.FirstBookSelect)
                     .invoke("removeAttr", "target")
                     .click();
              cy.reload();
              cy.xpath(this.FirstBookToCart).click({ force: true });
              cy.xpath(this.CrossButton).click();
              cy.go("back");

              cy.xpath(this.SecondBookSelect)
                     .invoke("removeAttr", "target")
                     .click();
              cy.reload();
              cy.xpath(this.SecondBookToCart).click({ force: true });
              cy.wait(1000);
              cy.reload();
              cy.go("back");
              cy.xpath(this.ThirdBookSelect)
                     .invoke("removeAttr", "target")
                     .click();
              cy.reload();
              cy.xpath(this.ThirdBookToCart).click({ force: true });
              cy.wait(1000);
              cy.reload();
              cy.xpath(this.ClickOnCartIcon).click({ force: true });
              cy.wait(5000);

              // **** Add To Cart ***
              cy.xpath(this.ClickOnCartIcon).click({ force: true });
              cy.wait(1000);
              cy.xpath(this.RemoveFirstElement).click({ force: true });
              cy.wait(1000);
              cy.xpath(this.ConfirmRemoveElementByYes).click({ force: true });
              cy.screenshot("ConfirmRemoveElementByYes");
              cy.wait(1000);
              cy.xpath(this.ClickOnPlaceOrderButton).click({ force: true });

       }
}
