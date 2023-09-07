package com.noCountry.uala.models.entity.ServicePaymentModel;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class ServicePayment {
    @Id
    private Long id_payment;
    private String service;
    private String refPayment;


}
