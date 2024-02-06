package com.ebs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebs.bean.Address;

public interface AddressRepo extends JpaRepository <Address, Long>{

}
