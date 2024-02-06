package com.ebs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.bean.Address;
import com.ebs.bean.Bill;
import com.ebs.service.AddressService;
import com.ebs.service.BillService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class BillController {

	@Autowired
	BillService service;
	
	@PostMapping("/performBillInsert")
	public String performInsert(@RequestBody Bill bill) {
		service.insertBill(bill);
		return "Record inserted";
	}
	
	@PutMapping("/performBillUpdate")
	public String performUpdate(@RequestBody Bill bill) {
		service.updateBill(bill);
		return "Record update";
	}
	
	@DeleteMapping("/performBillDelete/{id}")
	public String performDelete(@PathVariable("id") long id) {
		service.deleteBill(id);
		return "Record deleted";
	}
	
	@GetMapping("/ViewAllBills")
	public List<Bill> getAll() {
		Iterator<Bill> it =  service.getAll().iterator();
		List<Bill> list = new ArrayList<Bill>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
}
