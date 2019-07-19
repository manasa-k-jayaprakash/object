Feature: Login Functionality
@Login
Scenario:Use Login
Given User must be registered
When User enter credentials and performs login
Then User must be in the home page
@Resgister
Scenario:Use Login
Given User must not be logged in
When User enters all the mandatory field
Then Resgisteration done successfully
@Login @Search
Scenario:Use Login
Given User must be logged in
When Search for a product
Then Product details must be displayed
