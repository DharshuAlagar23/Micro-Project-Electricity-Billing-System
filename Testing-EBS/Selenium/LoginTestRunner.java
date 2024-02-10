package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LoginTestRunner {
	
	@Test
	public void openLogin() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.name("log1")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("emailId")).sendKeys("dharshualagar@gamil.com");
		driverInsert.findElement(By.id("password")).sendKeys("dharshu@1234");
		driverInsert.findElement(By.name("loginnow")).click();
		System.out.println(driverInsert.getTitle());
	}

	public static void main(String[] args) {

		LoginTestRunner obj = new LoginTestRunner();
		obj.openLogin();

	}

}
