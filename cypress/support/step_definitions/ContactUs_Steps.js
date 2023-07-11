/// <reference types="cypress" />
import { And, When , Then } from "@badeball/cypress-cucumber-preprocessor" ;


When('I type a first name', () => {
    cy.get('[name="first_name"]').type("Thiago");
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type("Torres");
})

When('I enter an email address', () => {
    cy.get('[name="email"]').type("osuperthiago@gmail.com");
})

When('I type a comment', () => {
    cy.get('textarea[name=message]').type("1717");
})

When('I click on the submit button', () => {
    cy.get('[type="submit"]').click();
})

Then ('I should be presented with a successful contact us submission message', () => {
    cy.get('h1').should('have.text','Thank You for your Message!');
})

Then ('I should be presented with a unsuccessful contact us submission message', () =>{
    cy.get('body').contains('Error: Invalid email address');
})

When ('I type a specific first name {string}', (firstname) => {
    cy.get('[name="first_name"]').type(firstname);

})

When ('I type a specific last name {string}', (lastname) => {
    cy.get('[name="last_name"]').type(lastname);

})

When ('I type a specific email address {string}', (email) => {
    cy.get('[name="email"]').type(email);

})

When ('I type a specific comment {string} and a number {int} within the comment input field', (word, number) => {
    cy.get('textarea[name=message]').type(word + " " + number);
    
})

When ('I type a first name {word} and a last name {string}', (firstName,lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
})

When ('I type a email address {string} and a comment {string}', (emailAddress,comment) => {
    cy.get('[name="email"]').type(emailAddress);
    cy.get('textarea[name=message]').type(comment);
})

When ('I should be presented with header text {string}', (message) => {
    cy.xpath("//h1 | //body").contains(message);
    
})

