package com.ebs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="tbl_user")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="user_id")
	private long userId;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="email_id")
	private String emailId;
	
	@Column(name="address")
	private String address;
	
	@Column(name="user_type")
	private String userType;
	
	@Column(name="password")
	private String password;

	public long getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User(int userId, String userName, String emailId, String address, String userType, String password) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.address = address;
		this.userType = userType;
		this.password = password;
	}

	public User() {
		super();
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", address=" + address
				+ ", userType=" + userType + ", password=" + password + "]";
	}
}
