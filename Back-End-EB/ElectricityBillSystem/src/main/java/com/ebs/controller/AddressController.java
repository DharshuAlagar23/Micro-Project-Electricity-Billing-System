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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ebs.bean.Address;
import com.ebs.service.AddressService;

@RestController
@CrossOrigin("http://localhost:4200/")

public class AddressController {

	@Autowired
	AddressService service;
	
	@PostMapping("/performAddressInsert")
	public String performInsert(@RequestBody Address add) {
		service.insertAddress(add);
		return "Record inserted";
	}
	
	@PutMapping("/performAddressUpdate")
	public String performUpdate(@RequestBody Address add) {
		service.updateAddress(add);
		return "Record update";
	}
	
	@DeleteMapping("/performAddressDelete/{id}")
	public void performDelete(@PathVariable("id") long id) {
		service.deleteAddress(id);
		//return "Record deleted";
	}
	
	@GetMapping("/ViewAllAddresss")
	public List<Address> getAll() {
		Iterator<Address> it =  service.getAll().iterator();
		List<Address> list = new ArrayList<Address>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	

}
