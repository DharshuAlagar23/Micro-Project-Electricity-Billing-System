package com.ebs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class BillTestInsertRunner {

	static WebDriver driverInsert;

	@Test
	public void openAddBill() {
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
		
		driverInsert.findElement(By.id("bill")).click();
		driverInsert.findElement(By.id("billNo")).sendKeys("4");
		driverInsert.findElement(By.id("electroboardId")).sendKeys("1004");
		driverInsert.findElement(By.id("amount")).sendKeys("6000");
		driverInsert.findElement(By.id("billDate")).sendKeys("06-02-2024");
		driverInsert.findElement(By.id("billStatus")).sendKeys("Pending");
		driverInsert.findElement(By.id("accountNo")).sendKeys("1234568790");
		

		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());

	}
	public static void main(String[] args) {

		BillTestInsertRunner obj = new BillTestInsertRunner();
		obj.openAddBill();
	}

}
