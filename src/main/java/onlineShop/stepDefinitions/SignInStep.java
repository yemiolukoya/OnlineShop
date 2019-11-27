package onlineShop.stepDefinitions;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import onlineShop.page.SignInPage;
import onlineShop.util.TestBase;

public class SignInStep extends TestBase {
	SignInPage signinPage = new SignInPage();


	@Given("^I navigate to https://shop\\.alzheimers\\.org\\.uk/$")
	public void i_navigate_to_https_shop_alzheimers_org_uk() throws Throwable {
		TestBase.initialization();

	}

	@Given("^I click on sigin link$")
	public void i_click_on_sigin_link() throws Throwable {
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
		String ExpectedMessage = "Logout";
		String ActualMessage = driver.findElement(By.xpath("//a[@href=\"https://shop.alzheimers.org.uk/logout\"]")).getText();
	 Assert.assertEquals(ExpectedMessage, ActualMessage);
	 
	 driver.quit();
	}

}