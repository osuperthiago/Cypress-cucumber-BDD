/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO{
    //isola o cypress com selectors para chamar depois quando necessários
    elements = {
        comment_TextFiled : () => cy.get('textarea[name=message]'),
        submit_Button : () => cy.get('[type="submit"]'),
        submission_header_text : () => cy.xpath("//h1 | //body")
    }

    navigateTo_ContactUs_Page(){
        super.navigate("Contact-Us/contactus.html");
    }

    type_FirstName(firstName){
        cy.get('[name="first_name"]').type(firstName);
    }

    type_LastName(lastName){
        cy.get('[name="last_name"]').type(lastName);
    }

    type_EmailAddress(email){
        cy.get('[name="email"]').type(email);
    }

    type_Comment(comment){
        //cy.get('textarea[name=message]').type(comment);
        //abaixo chama os elements e interage
        this.elements.comment_TextFiled().type(comment);
    }

    clickOn_Submit_Button(){
        this.elements.submit_Button().click();
    }

    validate_Submission_header(expectedText){
        //abaixo primeiro tipo de asserção
        this.elements.submission_header_text().contains(expectedText);
        //abaixo segundo tipo de asserção com cypress digitado direto
        this.elements.submission_header_text().invoke('text').should('include', expectedText);
    }

}

export default Contact_Us_PO