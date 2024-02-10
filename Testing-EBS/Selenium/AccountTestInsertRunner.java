package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AccountTestInsertRunner {

	static WebDriver driverInsert;

	@Test
	public void openAddAccount() {
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
		
		driverInsert.findElement(By.id("account")).click();
		driverInsert.findElement(By.id("accountId")).sendKeys("105");
		driverInsert.findElement(By.id("accountNo")).sendKeys("5236417890");
		driverInsert.findElement(By.id("accountType")).sendKeys("Domestic");
		driverInsert.findElement(By.id("accountStatus")).sendKeys("Pending");
		

		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());

	}
	public static void main(String[] args) {

		AccountTestInsertRunner obj = new AccountTestInsertRunner();
		obj.openAddAccount();
	}

}
