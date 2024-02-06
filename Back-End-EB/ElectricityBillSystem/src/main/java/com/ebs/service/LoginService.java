package com.ebs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebs.bean.Response;
import com.ebs.bean.User;
import com.ebs.repo.UserRepo;

@Service
public class LoginService {
	
	@Autowired
	UserRepo repo;
	User user;
	
	public Response login(User user) {
		User ref=repo.findByEmailId(user.getEmailId());
		User pass=repo.findByPassword(user.getPassword());
		if(ref!=null && pass!=null) {
			String value=ref.getPassword();
			String word=pass.getPassword();
			if (value.equals(word)) {
				String res=ref.getUserType();
			if(res.equals("Admin")) {
				return new Response("Admin Success");
			} else {
				return new Response("User Success");
			}
			}
			else {
				return new Response("Login Fail");
			}
		}  else {
			return new Response("Login Fail");
		}
		
	}	
	
	}	



