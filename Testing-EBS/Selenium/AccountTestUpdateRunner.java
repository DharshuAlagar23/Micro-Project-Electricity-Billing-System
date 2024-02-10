package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AccountTestUpdateRunner {

	static WebDriver driverUpdate;

	@Test
	public void openUpdateAccount() {
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
		
		driverUpdate.findElement(By.id("account")).click();
		driverUpdate.findElement(By.id("accountId")).sendKeys("105");
		driverUpdate.findElement(By.id("accountNo")).sendKeys("5236417890");
		driverUpdate.findElement(By.id("accountType")).sendKeys("Commercial");
		driverUpdate.findElement(By.id("accountStatus")).sendKeys("Paid");
		

		driverUpdate.findElement(By.id("update")).click();
		System.out.println(driverUpdate.getTitle());

	}
	public static void main(String[] args) {

		AccountTestUpdateRunner obj = new AccountTestUpdateRunner();
		obj.openUpdateAccount();
	}


}
