package onlineShop.page;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import onlineShop.util.TestBase;

public class AddItemPage extends TestBase {

	JavascriptExecutor executor;

	@FindBy(xpath = "//div[@class=\"product-banner product-banner-featured\"]")
	WebElement featureItem;

	@FindBy(xpath = "//i[@class=\"fa fa-plus\"]")
	WebElement addButton;

	@FindBy(id="button-cart")
	WebElement addToBasketButton;
	
	public AddItemPage() {
		PageFactory.initElements(driver, this);

	}

	public void ClickFeatureItem() {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", featureItem);
		// featureItem.click();
	}

	public void ClickaddButton() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", addButton);
		//addButton.click();
	}
	
	public void ClickAddToBasketButton() {
		addToBasketButton.click();
	}

}
