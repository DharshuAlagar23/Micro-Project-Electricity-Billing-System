package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestDeleteRunner {
	static WebDriver driverDelete;

	@Test
	public void openDeleteAddress() {
		WebDriver driverDelete;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverDelete = new ChromeDriver();
		driverDelete.navigate().to("http://localhost:4200/");

		driverDelete.findElement(By.name("log1")).click();
		System.out.println(driverDelete.getTitle());

		driverDelete.findElement(By.id("emailId")).sendKeys("admin@gmail.com");
		driverDelete.findElement(By.id("password")).sendKeys("123");
		driverDelete.findElement(By.id("loginnow")).click();
		System.out.println(driverDelete.getTitle());
		
		driverDelete.findElement(By.id("doorNo")).sendKeys("301");
		driverDelete.findElement(By.id("delete")).submit();
		System.out.println(driverDelete.getTitle());

	}

	public static void main(String[] args) {
		AddressTestDeleteRunner obj = new AddressTestDeleteRunner();

		obj.openDeleteAddress();

	}

}
