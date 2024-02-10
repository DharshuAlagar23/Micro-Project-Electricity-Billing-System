package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestRunner {

	static WebDriver driverInsert;

	@Test
	public void openAddAddress() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");

		driverInsert.findElement(By.name("log1")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("emailId")).sendKeys("admin@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("123");
		driverInsert.findElement(By.id("loginnow")).click();
		System.out.println(driverInsert.getTitle());
		
		driverInsert.findElement(By.id("address")).click();
		driverInsert.findElement(By.id("doorNo")).sendKeys("301");
		driverInsert.findElement(By.id("street")).sendKeys("Rj");
		driverInsert.findElement(By.id("city")).sendKeys("Rajapalayam");
		driverInsert.findElement(By.id("state")).sendKeys("TamilNadu");
		driverInsert.findElement(By.id("pinCode")).sendKeys("123654");

		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());

		
		

	}
	public static void main(String[] args) {

		AddressTestRunner obj = new AddressTestRunner();
		obj.openAddAddress();


	}

}
