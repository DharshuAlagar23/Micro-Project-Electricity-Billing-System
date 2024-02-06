package com.ebs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.bean.Account;
import com.ebs.bean.User;
import com.ebs.service.AccountService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class AccountController {
	
	@Autowired 
	AccountService service;
	  
	@PostMapping("/performAccountInsert")
	public String performInsert(@ModelAttribute Account acc) {
		service.insertAccount(acc);
		return "Record inserted";
	}
	
	@PutMapping("/performAccountUpdate")
	public String performUpdate(@ModelAttribute Account acc) {
		service.updateAccount(acc);
		return "Record update";
	}
	
	@DeleteMapping("/performAccountDelete/{id}")
	public String performDelete(@PathVariable("id") long id) {
		service.deleteAccount(id);
		return "Record deleted";
	}
	
	@GetMapping("/ViewAllAccountss")
	public List<Account> getAll() {
		Iterator<Account> it =  service.getAll().iterator();
		List<Account> list = new ArrayList<Account>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	


	
}
