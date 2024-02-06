package com.ebs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ebs.bean.Address;
import com.ebs.repo.AddressRepo;

@Service

public class AddressService {

	@Autowired
	AddressRepo repo;
	
	public String insertAddress(Address add) {
       repo.save(add);
       return "Success";
   }
	
	public String updateAddress(Address add) {
       repo.save(add);
       return "Successfully Updated";
   }
	
	public String deleteAddress(@PathVariable("id") long id) {
		repo.deleteById(id);
		return "Successfully Deleted";
	}
	
	public List<Address> getAll() {
		Iterator<Address> it =  repo.findAll().iterator();
		List<Address> list = new ArrayList<Address>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
