package com.ebs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="tbl_account")
public class Account {

	@Id
	@Column(name ="account_id")
	private long accountId;
	
	@Column(name ="account_no")
	private long accountNo;
	
	@Column(name ="account_type")
	private String accountType;
	
	@Column(name ="account_status")
	private String accountStatus;

	public long getAccountId() {
		return accountId;
	}

	public void setAccountId(long accountId) {
		this.accountId = accountId;
	}

	public long getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getAccountStatus() {
		return accountStatus;
	}

	public void setAccountStatus(String accountStatus) {
		this.accountStatus = accountStatus;
	}

	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Account(long accountId, long accountNo, String accountType, String accountStatus) {
		super();
		this.accountId = accountId;
		this.accountNo = accountNo;
		this.accountType = accountType;
		this.accountStatus = accountStatus;
	}

	@Override
	public String toString() {
		return "Account [accountId=" + accountId + ", accountNo=" + accountNo + ", accountType=" + accountType
				+ ", accountStatus=" + accountStatus + "]";
	}
	
	
}
