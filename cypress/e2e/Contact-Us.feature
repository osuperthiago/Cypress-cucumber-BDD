Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on contact us button
        And I type a first name
        And I type a last name
        And I enter an e-mail address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

