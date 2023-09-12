package com.noCountry.uala.models.entity.ServicePaymentModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.noCountry.uala.models.entity.Wallet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "service_payment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServicePaymentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_payment;
    private String refPayment;
    private Date paymentDate;

    private String serviceType;
    private String noService;
    private String serviceOwner;
    private Date expirationDate;
    private Date issueDate;
    private String invoiceSeries;
    private float balance;
    private String descriptionService;
    private boolean recharger;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="wallet_id")
    private Wallet walletPayment;


}
