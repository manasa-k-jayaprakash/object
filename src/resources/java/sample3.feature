Feature: Login Functionality
Scenario Outline: Login Functionality

Given User must be registered 
When Login using <username> and <password>
Then User must be in home 

Examples:
|username||password|
|abc123||abc123|
|xyz12||xyz123|

