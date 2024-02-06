package com.ebs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="tbl_address")
public class Address {

	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="doorno")
	private long doorNo;
	
	@Column(name="street")
	private String street;
	
	@Column(name="city")
	private String city;
	
	@Column(name="state")
	private String state;
	
	@Column(name="pincode")
	private long pinCode;

	public long getDoorNo() {
		return doorNo;
	}

	public void setDoorNo(long doorNo) {
		this.doorNo = doorNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPinCode() {
		return pinCode;
	}

	public void setPinCode(long pinCode) {
		this.pinCode = pinCode;
	}

	@Override
	public String toString() {
		return "Address [doorNo=" + doorNo + ", street=" + street + ", city=" + city + ", state=" + state + ", pinCode="
				+ pinCode + "]";
	}

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(long doorNo, String street, String city, String state, long pinCode) {
		super();
		this.doorNo = doorNo;
		this.street = street;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
	}
	
	
}
