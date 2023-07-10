Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate to the webdriveruniversity homepage
        When I click on contact us button
        And I type a specific first name "Thithi"
        And I type a specific last name "Torres"
        And I type a specific email address "osuperthiago@gmail.com"
        And I type a specific comment "Hello there!" and a number 17 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario Outline: Validate Contact us page
        Given I navigate to the webdriveruniversity homepage
        When I click on contact us button
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress               | comment      | message                      |
            | Thiago    | Torres   | osuperthiago@gmail.com     | Hello there! | Thank You for your Message!  |
            | ThiThi    | Oliveira | osuperthiago1717@gmail.com | Hello there! | Thank You for your Message!  |
            | ThiThi    | Oliveira | unformatedemail            | Hello there! | Error: Invalid email address |






