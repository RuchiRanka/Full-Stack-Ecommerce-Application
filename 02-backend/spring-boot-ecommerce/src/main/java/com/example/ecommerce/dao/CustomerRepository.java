package com.example.ecommerce.dao;

import com.example.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

// <Customer, Long> means Customer is the entity type and Long is the primary key type
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
    Customer findByEmail(String theEmail);
}
