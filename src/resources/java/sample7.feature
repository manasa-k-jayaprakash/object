
Feature: Login functionality
Scenario: Login functionality
    Given user must be registered
    When user enters the below credentails
    |username||password|
    |abc123||abc123|
		|xyz12||xyz12|
    Then user must be in home page
   

 

