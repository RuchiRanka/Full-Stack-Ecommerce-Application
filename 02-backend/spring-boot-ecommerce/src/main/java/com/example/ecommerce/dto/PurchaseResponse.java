package com.example.ecommerce.dto;

import lombok.Data;

@Data
public class PurchaseResponse {

    // Lombok @Data will generate constructor for final fields, hence we change it to 'final'
    // or you can use @NonNull annotation on the field instead of final
    // private String orderTrackingNumber;
    private final String orderTrackingNumber;
}
