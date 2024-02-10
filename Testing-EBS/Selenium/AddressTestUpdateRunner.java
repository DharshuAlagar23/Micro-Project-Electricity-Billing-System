package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestUpdateRunner {

	static WebDriver driverUpdate;

	@Test
	public void openUpdateAddress() {
		WebDriver driverUpdate;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverUpdate = new ChromeDriver();
		driverUpdate.navigate().to("http://localhost:4200/");

		driverUpdate.findElement(By.name("log1")).click();
		System.out.println(driverUpdate.getTitle());

		driverUpdate.findElement(By.id("emailId")).sendKeys("admin@gmail.com");
		driverUpdate.findElement(By.id("password")).sendKeys("123");
		driverUpdate.findElement(By.id("loginnow")).click();
		System.out.println(driverUpdate.getTitle());
		
		driverUpdate.findElement(By.id("address")).click();
		driverUpdate.findElement(By.id("doorNo")).sendKeys("301");
		driverUpdate.findElement(By.id("street")).sendKeys("vnr");
		driverUpdate.findElement(By.id("city")).sendKeys("Madurai");
		driverUpdate.findElement(By.id("state")).sendKeys("TamilNadu");
		driverUpdate.findElement(By.id("pinCode")).sendKeys("123456");

		driverUpdate.findElement(By.id("update")).click();
		System.out.println(driverUpdate.getTitle());

		
		

	}
	public static void main(String[] args) {

		AddressTestUpdateRunner obj = new AddressTestUpdateRunner();
		obj.openUpdateAddress();


	}

}
