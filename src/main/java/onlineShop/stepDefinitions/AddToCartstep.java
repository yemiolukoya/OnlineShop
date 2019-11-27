package onlineShop.stepDefinitions;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import onlineShop.page.AddItemPage;
import onlineShop.util.TestBase;

public class AddToCartstep extends TestBase {

	AddItemPage addItemPage = new AddItemPage();

	@Given("^I click on a feature product$")
	public void i_click_on_a_feature_product() throws Throwable {
		TestBase.initialization();

		AddItemPage addItemPage = new AddItemPage();
		addItemPage.ClickFeatureItem();

	}

	@Given("^I add two items to basket$")
	public void i_add_two_items_to_basket() throws Throwable {
		AddItemPage addItemPage = new AddItemPage();
		addItemPage.ClickaddButton();
	}

	@When("^I click add to basket$")
	public void i_click_add_to_basket() throws Throwable {
		AddItemPage addItemPage = new AddItemPage();
		addItemPage.ClickAddToBasketButton();
	}

	@Then("^two items should be present in the basket$")
	public void two_items_should_be_present_in_the_basket() throws Throwable {

		String ExpectedCartItemNo = "Qty: 2";
		String ActualCartItemNo = driver.findElement(By.xpath("//*[@id=\"cart\"]/div/div[2]/div/div/div[2]/div[2]"))
				.getText();
		Assert.assertEquals(ExpectedCartItemNo, ActualCartItemNo);

		driver.close();
	}

}
