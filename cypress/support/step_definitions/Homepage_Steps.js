/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor" ;
import Base_PO from "../page-objects/Base_PO";

//const url = "http://www.webdriveruniversity.com/";

const basePage = new Base_PO();

Before(() => {
    cy.log("Executing commands inside Homepa ge Steps");
})

Given('I navigate to the webdriveruniversity homepage', () => {
    //cy.visit(url);
    basePage.navigate("");
})

When('I click on contact us button', () => {
    //cy.get("#contact-us").invoke("removeAttr","target").click();
    cy.clickAndOpenLink_InSameTab("#contact-us");
})

When('I click on login portal button', () => {
    //cy.get("#login-portal").invoke("removeAttr","target").click();
    cy.clickAndOpenLink_InSameTab("#login-portal");
})

When('I click on button clicks button', () => {
    //cy.get("#login-portal").invoke("removeAttr","target").click();
    cy.clickAndOpenLink_InSameTab("#button-clicks")
})


