package onlineShop.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import onlineShop.util.TestBase;

public class SignInPage extends TestBase {

	@FindBy(xpath = "//a[@class=\"btn btn-blue\"]")
	WebElement signInLink;

	@FindBy(id = "input-email")
	WebElement emailField;

	@FindBy(id = "input-password")
	WebElement passwordField;

	@FindBy(xpath = "//input[@type=\"submit\"]")
	WebElement loginButton;

	public SignInPage() {
		PageFactory.initElements(driver, this);

	}

	public void ClickSignInLink() {
		signInLink.click();
	}

	public void fillEmailField(String email) {
		emailField.sendKeys(email);
	}

	public void fillPasswordField(String password) {
		passwordField.sendKeys(password);
	}

	public void ClickLoginButton() {
		loginButton.click();
	}

}
