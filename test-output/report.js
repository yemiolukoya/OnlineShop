$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/yemioluv/eclipse-workspace/onlineShop2/src/main/java/onlineShopFeature/SignIn.feature");
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
  "duration": 5728715787,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_on_sigin_link()"
});
formatter.result({
  "duration": 471959572,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_enter_E_Mail_Address()"
});
formatter.result({
  "duration": 2964528636,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_enter_password()"
});
formatter.result({
  "duration": 143304642,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_click_login_button()"
});
formatter.result({
  "duration": 3024235652,
  "status": "passed"
});
formatter.match({
  "location": "SignInStep.i_should_be_on_the_home_page()"
});
formatter.result({
  "duration": 491491124,
  "status": "passed"
});
});