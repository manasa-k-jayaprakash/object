Feature: Login Functionality
Background: Browser Launch
Given Browser must be installed by user
When User Enters AUI URL in bowser
Then Application must open in the browser 

Scenario: Login
Given  User must be in AUI login page
When User enters the credentails
Then User must be in home page

Scenario: Search
Given Home Page
When User enters the product to search
Then product details must be displayed to the user
