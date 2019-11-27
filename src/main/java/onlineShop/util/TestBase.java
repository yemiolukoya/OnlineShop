package onlineShop.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import onlineShop.page.SignInPage;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;


	public TestBase() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(
					"/Users/yemioluv/eclipse-workspace/onlineShop2/src/main/java/onlineShop/config/config.properties");

			prop.load(fis);
		} catch (IOException e) {
			e.getMessage();

		}

	}

	public static void initialization() {
		String browserName = prop.getProperty("browser");

		if (browserName.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "/Users/yemioluv/eclipse-workspace/onlineShop2/chromedriver 6");
			driver = new ChromeDriver();
		} 
		else if (browserName.equals("FF")) {
			//System.setProperty("webdriver.gecko.driver", "/Users/yemioluv/eclipse-workspace/CucumberPOM/geckodriver");
			driver = new FirefoxDriver();
		}

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.get(prop.getProperty("url"));
	}

}
