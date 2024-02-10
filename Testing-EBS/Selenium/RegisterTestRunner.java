package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterTestRunner {

	@Test
	public void openRegister() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver","drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("register")).click();
		System.out.println(driverInsert.getTitle());
		
		driverInsert.findElement(By.name("userId")).sendKeys("19953");
		driverInsert.findElement(By.name("userName")).sendKeys("DharshuAlagar");
		driverInsert.findElement(By.name("emailId")).sendKeys("dharshualagar@gamil.com");
		driverInsert.findElement(By.name("address")).sendKeys("2/141,South Street");
		driverInsert.findElement(By.name("userType")).sendKeys("User");
		driverInsert.findElement(By.name("password")).sendKeys("dharshu@1234");
		driverInsert.findElement(By.name("registersoon")).click();

		System.out.println(driverInsert.getTitle());

		
	}
	public static void main(String[] args) {
		RegisterTestRunner obj = new RegisterTestRunner();
		obj.openRegister();

	}

}
