package com.mw.stepDefinitions;

import org.openqa.selenium.By;

import com.mw.page.SignInPage;
import com.mw.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SignInStep extends TestBase {
	SignInPage signinPage = new SignInPage();


	@Given("^I navigate to https://shop\\.alzheimers\\.org\\.uk/$")
	public void i_navigate_to_https_shop_alzheimers_org_uk() throws Throwable {

		TestBase.initialization();

	}

	@Given("^I click on sigin link$")
	public void i_click_on_sigin_link() {
		SignInPage signinPage = new SignInPage();

		signinPage.ClickSignInLink();
	}

	@When("^I enter E-Mail Address$")
	public void i_enter_E_Mail_Address() throws Throwable {
		SignInPage signinPage = new SignInPage();

		signinPage.fillEmailField("yemmie69@hotmail.com");

	}

	@When("^I enter password$")
	public void i_enter_password() throws Throwable {
		SignInPage signinPage = new SignInPage();

		signinPage.fillPasswordField("Olukoya69");

	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		SignInPage signinPage = new SignInPage();

		signinPage.ClickLoginButton();

	}

	@Then("^I should be on the home page$")
	public void i_should_be_on_the_home_page() throws Throwable {

		String expectedHomePageMessage = "My Account";

		String actualHomePageMessage = driver.getTitle();
		System.out.println(actualHomePageMessage);

		Assert.assertEquals(expectedHomePageMessage, actualHomePageMessage);

	}

	@When("^I enter invalid \"([^\"]*)\" Address$")
	public void i_enter_invalid_Address(String arg1) throws Throwable {
		SignInPage signinPage = new SignInPage();
		signinPage.fillEmailField(arg1);
	}

	@When("^I enter invalid \"([^\"]*)\"$")
	public void i_enter_invalid(String arg2) throws Throwable {
		SignInPage signinPage = new SignInPage();
		signinPage.fillPasswordField(arg2);

	}

	@Then("^error message should be displayed$")

	public void error_message_should_be_displayed() {
		String expectedErrorMessage = "No match for E-Mail Address and/or Password.";

		String actualErrorMessage = driver.findElement(By.xpath("//div[@class=\"alert alert-danger\"]")).getText();

		Assert.assertEquals(expectedErrorMessage, actualErrorMessage);

	}

}
