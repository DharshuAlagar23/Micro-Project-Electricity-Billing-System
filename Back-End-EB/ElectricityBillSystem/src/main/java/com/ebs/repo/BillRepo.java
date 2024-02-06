package com.ebs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebs.bean.Address;
import com.ebs.bean.Bill;

public interface BillRepo extends JpaRepository <Bill, Long> {

}
