package com.noCountry.uala.models.dto.ServicePayment;

import lombok.Data;

import java.text.DecimalFormat;
import java.util.List;

@Data
public class ResponseServiceAndRechargeDTO {
    private double totalService;
    private double totalRecharge;
    private List<CalculatePaymentDTO> service;
    private List<RechargeMovilServiceDTO> recharge;
    private static final DecimalFormat formato1 = new DecimalFormat("#.00");

    public void calculateBalanceService(){
        for (int i = 0; i < service.size(); i++) {
            this.totalService+=service.get(i).getBalance();
        }
        totalService=Double.parseDouble(formato1.format(totalService));
    }

    public void calculateBalanceRecharge(){
        for (int i = 0; i < recharge.size(); i++) {
            this.totalRecharge+= recharge.get(i).getPrice();
        }
        totalRecharge=Double.parseDouble(formato1.format(totalRecharge));
    }
}
