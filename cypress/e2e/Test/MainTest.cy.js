///<reference types = "Cypress" />

import { BaseURLClass } from "../Drivers/BaseURL.cy";
import { GmailSignInPageClass } from "../Page/GmailSignInPage.cy";
import { WriterAndBookFilterClass } from "../Page/WriterAndBookFilterPage.cy";
import { SelectingBookpage } from "../Page/SelectingBookPage.cy";
import { AddToCartPage } from "../Page/AddToCartPage.cy";
import { ShippingInformationPage } from "../Page/ShippingInformationPage.cy";

// const GmailPage = new GmailSignInPageClass();
const baseurlclass = new BaseURLClass();
const WriterAndBookFilter = new WriterAndBookFilterClass();
const ShippingInfo = new ShippingInformationPage();

// const SelectBook = new SelectingBookpage();
// const AddToCart = new AddToCartPage();

before(() => {
       baseurlclass.URL();
});

it("Writer and Book Filtering", function () {
       WriterAndBookFilter.WriterAndBookFiltering();
});

it("Shipping Information", function () {
       ShippingInfo.ShippingInformation();
});

// it("Login", function () {
//        GmailPage.Registration();
// });

// it("Selecting Book", function () {
//        SelectBook.SelectingBook();
// });

// it("Add To Cart", function () {
//        AddToCart.AddToCart();
// });
