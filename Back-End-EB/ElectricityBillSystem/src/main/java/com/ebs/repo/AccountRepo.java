package com.ebs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebs.bean.Account;

public interface AccountRepo extends JpaRepository<Account, Long> {

}
