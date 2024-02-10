package com.ebs;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ebs.bean.Account;
import com.ebs.bean.Address;
import com.ebs.bean.Bill;
import com.ebs.bean.Response;
import com.ebs.bean.User;
import com.ebs.service.AccountService;
import com.ebs.service.AddressService;
import com.ebs.service.BillService;
import com.ebs.service.LoginService;
import com.ebs.service.RegisterService;

@SpringBootTest
class ElectricityBillSystemApplicationTests {
	
	@Autowired
	AddressService service;
	String insert;
	String update;
	String delete;
	String result;
	String result1;
	
	List<Address> list =  new ArrayList<>();
	List<Address> list1 =  new ArrayList<>();
	
	Address address = new Address(111,"Viswai","Tamilnadu","India",626189);
	Address address1 = new Address(222,"Sivakasi","Tamilnadu","India",626119);
	

	Address address2;
	Address address3;
	
	
	@Test
	@Order(1)
	public void testPerformAddressInsert() {
		insert = "Inserted";
		result = service.insertAddress(address);
		
	}
	@Test
	@Order(2)
	public void testPerformAddressUpdate() {
		update = "Updated";
		result = service.updateAddress(address1);
		
	}
	@Test
	@Order(3)
	public void testPerformAddressDelete() {
		delete = "Deleted";
		result = service.deleteAddress(124);
		
	}
	@Test
	@Order(4)
	public void testAddressGetAll() {
		list = service.getAll();
		Address address2 = new Address(152,"Sivakasi","Tamilnadu","India",626771);
		Address address3 = new Address(153,"Rajapalayam","Tamilnadu","India",626292);
		list1.add(address2);
		list1.add(address3);
		list.equals(list1);
	}
	
	@Autowired
	AccountService service1;
	String insertAccount;
	String updateAccount;
	String deleteAccount;
	boolean resultAccount;
	boolean result1Account;
	
	List<Account> listAccount = new ArrayList<>();
	List<Account> list1Account = new ArrayList<>();
	
	Account account = new Account(104,123654987,"Commercial","Not Paid");
	Account account1 = new Account(105,365478912,"Domestic","Paid");
	
	Account account2;
	Account account3;
	
	@Test
	@Order(5)
	public void testPerformAccountInsert() {
		insertAccount = "Inserted";
		resultAccount = service1.insertAccount(account);
		assertEquals(true, resultAccount);
	}
	
	@Test
	@Order(6)
	public void testPerformAccountUpdate() {
		updateAccount = "Updated";
		resultAccount =service1.insertAccount(account1);
		assertEquals(true, resultAccount);
	}
	
	@Test
	@Order(7)
	public void testPerformAccountDelete() {
		deleteAccount = "Deleted";
		resultAccount = service1.deleteAccount(3);
		assertEquals(true, resultAccount);
	}
	
	@Test
	@Order(8)
	public void testAccountGetAll() {
		listAccount = service1.getAll();
		Account account2=new Account (104,123654987,"Commercial","Not Paid");
		Account account3 = new Account(105,365478912,"Domestic","Paid");
		
		list1Account.add(account2);
		list1Account.add(account3);
		listAccount.equals(list1Account);
	
	}
	
	@Autowired
	BillService service2;
	String insertBill;
	String updateBill;
	String deleteBill;
	String resultBill;
	boolean result1Bill;
	
	List<Bill> listBill = new ArrayList<>();
	List<Bill> list1Bill = new ArrayList<>();
	
	Bill bill = new Bill(03,1003,50000,"05-02-24","Pending",365478912);
	Bill bill1 = new Bill(05,1003,10000,"05-02-24","Paid",123654795);
	
	Bill bill2;
	Bill bill3;
	
	@Test
	@Order(9)
	public void testPerformBillInsert() {
		insertBill = "Inserted";
		resultBill = service2.insertBill(bill);
		assertEquals(true, resultBill);
		//return insert;
	}
	
	@Test
	@Order(10)
	public void testPerformBillUpdate() {
		updateBill = "Updated";
		resultBill =service2.updateBill(bill1);
		assertEquals(true, resultBill);
		//return update;
	}
	
	@Test
	@Order(11)
	public void testPerformBillDelete() {
		deleteBill = "Deleted";
		resultBill = service2.deleteBill(3);
	}
	
	@Test
	@Order(12)
	public void testBillGetAll() {
		listBill = service2.getAll();
		Bill bill = new Bill(03,1003,50000,"05-02-24","Pending",365478912);
		Bill bill1 = new Bill(03,1003,50000,"05-02-24","Pending",123654795);
		
		list1Bill.add(bill2);
		list1Bill.add(bill3);
		listBill.equals(list1Bill);
	
	}
	
	@Autowired
	LoginService loginservice;
	
	@Autowired
	RegisterService registerservice;
	
	boolean res;
	boolean val;
	User log =  new User (4,"jeni", "jeni@gmail.com","2/353 South","User","jeni@123");
	
	@Test
	@Order(13)
	void performLogin() {
		Response res1 = new Response("User Success");
		Response res = loginservice.login(log);
		res1.equals(res);
		
	}
	
	@Test
	@Order(14)
	void performRegister() {
		val=true;
		res=registerservice.Register(log);
		assertEquals(val, res);
	}
	

	
}

