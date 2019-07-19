$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Handson/Cucumber/src/resources/java/sample7.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality;login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user must be registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters the below credentails",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "abc123",
        "",
        "abc123"
      ],
      "line": 7
    },
    {
      "cells": [
        "xyz12",
        "",
        "xyz12"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user must be in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_must_be_registered()"
});
formatter.result({
  "duration": 222164400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_enters_the_below_credentails(DataTable)"
});
formatter.result({
  "duration": 5569700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_must_be_in_home_page()"
});
formatter.result({
  "duration": 745800,
  "status": "passed"
});
});