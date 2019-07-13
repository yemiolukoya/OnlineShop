$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/yemioluv/eclipse-workspace/onlineShop2/src/main/java/com/mw/feature/SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Signin to Online Shop",
  "description": "",
  "id": "signin-to-online-shop",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Signin to Online Shop with valid credentials",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to https://shop.alzheimers.org.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sigin link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter E-Mail Address",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStep.i_navigate_to_https_shop_alzheimers_org_uk()"
});
formatter.result({
  "duration": 21930948884,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_on_sigin_link()"
});
formatter.result({
  "duration": 2955836729,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_enter_E_Mail_Address()"
});
formatter.result({
  "duration": 309288039,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_enter_password()"
});
formatter.result({
  "duration": 135863743,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_login_button()"
});
formatter.result({
  "duration": 3117557940,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_should_be_on_the_home_page()"
});
formatter.result({
  "duration": 13166126,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Signin to Online Shop with invalid credentials",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to https://shop.alzheimers.org.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sigin link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid \"\u003cE-Mail\u003e\" Address",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "E-Mail",
        "password"
      ],
      "line": 20,
      "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc@a.com",
        "qawsedrft"
      ],
      "line": 21,
      "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abc@b.com",
        "qawsedrft"
      ],
      "line": 22,
      "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "abc@c.com",
        "qawsedrft"
      ],
      "line": 23,
      "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Signin to Online Shop with invalid credentials",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to https://shop.alzheimers.org.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sigin link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid \"abc@a.com\" Address",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid \"qawsedrft\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStep.i_navigate_to_https_shop_alzheimers_org_uk()"
});
formatter.result({
  "duration": 19288327410,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_on_sigin_link()"
});
formatter.result({
  "duration": 2801171467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@a.com",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid_Address(String)"
});
formatter.result({
  "duration": 228148460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qawsedrft",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid(String)"
});
formatter.result({
  "duration": 138463257,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_login_button()"
});
formatter.result({
  "duration": 1865388303,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.error_message_should_be_displayed()"
});
formatter.result({
  "duration": 90484602,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Signin to Online Shop with invalid credentials",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to https://shop.alzheimers.org.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sigin link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid \"abc@b.com\" Address",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid \"qawsedrft\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStep.i_navigate_to_https_shop_alzheimers_org_uk()"
});
formatter.result({
  "duration": 16048460102,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_on_sigin_link()"
});
formatter.result({
  "duration": 4180042060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@b.com",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid_Address(String)"
});
formatter.result({
  "duration": 239495352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qawsedrft",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid(String)"
});
formatter.result({
  "duration": 186057569,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_login_button()"
});
formatter.result({
  "duration": 2536275471,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.error_message_should_be_displayed()"
});
formatter.result({
  "duration": 50080639,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Signin to Online Shop with invalid credentials",
  "description": "",
  "id": "signin-to-online-shop;signin-to-online-shop-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to https://shop.alzheimers.org.uk/",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sigin link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid \"abc@c.com\" Address",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid \"qawsedrft\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStep.i_navigate_to_https_shop_alzheimers_org_uk()"
});
formatter.result({
  "duration": 19653455673,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_on_sigin_link()"
});
formatter.result({
  "duration": 2277227882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@c.com",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid_Address(String)"
});
formatter.result({
  "duration": 224686157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qawsedrft",
      "offset": 17
    }
  ],
  "location": "SignInStep.i_enter_invalid(String)"
});
formatter.result({
  "duration": 159047612,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_login_button()"
});
formatter.result({
  "duration": 2181703335,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.error_message_should_be_displayed()"
});
formatter.result({
  "duration": 36796509,
  "status": "passed"
});
});