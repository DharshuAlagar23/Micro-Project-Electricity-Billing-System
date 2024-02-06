package com.ebs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ebs.bean.Address;
import com.ebs.bean.Bill;
import com.ebs.repo.AddressRepo;
import com.ebs.repo.BillRepo;

@Service
public class BillService {
	@Autowired
	BillRepo repo;
	
	public String insertBill(Bill bill) {
       repo.save(bill);
       return "Success";
   }
	
	public String updateBill(Bill bill) {
       repo.save(bill);
       return "Successfully Updated";
   }
	
	public String deleteBill(@PathVariable("id") long id) {
		repo.deleteById(id);
		return "Successfully Deleted";
	}
	
	public List<Bill> getAll() {
		Iterator<Bill> it =  repo.findAll().iterator();
		List<Bill> list = new ArrayList<Bill>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}


}
