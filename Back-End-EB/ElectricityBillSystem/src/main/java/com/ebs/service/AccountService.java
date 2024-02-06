package com.ebs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ebs.bean.Account;

import com.ebs.repo.AccountRepo;
@Service
public class AccountService {

	@Autowired
	AccountRepo repo;
	
	public boolean insertAccount(Account acc) {
	       repo.save(acc);
	       return true;
	   }
		
		public boolean updateAccount(Account acc) {
	       repo.save(acc);
	       return true;
	   }
		
		public boolean deleteAccount(@PathVariable("id") long id) {
			repo.deleteById(id);
			return true;
		}
		
		public List<Account> getAll() {
			Iterator<Account> it =  repo.findAll().iterator();
			List<Account> list = new ArrayList<Account>();
			while(it.hasNext()) {
				list.add(it.next());
			}
			return list;
		}
		

	
}
