package onlineShop.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import onlineShop.util.TestBase;

public class Homestep extends TestBase{
	
	JavascriptExecutor executor;

	
	//WebDriver driver;
	
	
	@Given("^i want to shop on the alzheimers online shop$")
	public void i_want_to_shop_on_the_alzheimers_online_shop() throws Throwable {

	}

	@When("^i navigate to https://shop\\.alzheimers\\.org\\.uk/$")
	public void i_navigate_to_https_shop_alzheimers_org_uk() throws Throwable {
		TestBase.initialization();

	   
	}

	@When("^i click on online shop$")
	public void i_click_on_online_shop() throws Throwable {
		//executor.executeScript("arguments[0].click();", "//a[@class=\"site-header-shop\"]");

		//driver.findElement(By.xpath("//a[@class=\"site-header-shop\"]")).click();
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//a[@class=\"site-header-shop\"]")));
		
		//driver.findElement(By.xpath("//a[@href=\"https://shop.alzheimers.org.uk/login\"]")).click();

	    
	}

	@Then("^the online shop logo should be displayed$")
	public void the_online_shop_logo_should_be_displayed() throws Throwable {
		String expectedText = "Online Shop";
		String actualText = driver.findElement(By.xpath("//div[@class=\"col-xs-9 col-md-8 hidden-xs hidden-sm\"]")).getText();
		
		Assert.assertEquals(expectedText, actualText);
	    
	}



}
