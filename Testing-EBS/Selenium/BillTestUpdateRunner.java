package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class BillTestUpdateRunner {

	static WebDriver driverUpdate;

	@Test
	public void openUpdateBill() {
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
		
		driverUpdate.findElement(By.id("bill")).click();
		driverUpdate.findElement(By.id("billNo")).sendKeys("4");
		driverUpdate.findElement(By.id("electroboardId")).sendKeys("1004");
		driverUpdate.findElement(By.id("amount")).sendKeys("6000");
		driverUpdate.findElement(By.id("billDate")).sendKeys("06-02-2024");
		driverUpdate.findElement(By.id("billStatus")).sendKeys("Paid");
		driverUpdate.findElement(By.id("accountNo")).sendKeys("1234568790");
		

		driverUpdate.findElement(By.id("update")).click();
		System.out.println(driverUpdate.getTitle());

	}
	public static void main(String[] args) {

		BillTestUpdateRunner obj = new BillTestUpdateRunner();
		obj.openUpdateBill();
	}


}
