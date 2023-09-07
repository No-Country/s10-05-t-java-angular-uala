package com.noCountry.uala.models.dto.ServicePayment;

import com.noCountry.uala.security.util.GetUserLogged;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.text.DecimalFormat;

@Data
@ToString
@NoArgsConstructor
public class CalculatePaymentDTO {
    private String servicetype;
    private String noservice;
    private String serviceOwner;
    private Date expirationDate;
    private Date issueDate;
    private String invoiceSeries;
    private float balance;
    private String descriptionService;

    public void calculateInvoice(String User){
        calculateDates();
        generateBalance();
        others(User);
    }


    private void calculateDates(){
        Date date1 = new Date(System.currentTimeMillis());
        int days= (int)(Math.random()*15)+1;
        int days2= 20-days;
        long millis= days*86400000;
        this.issueDate=new Date(System.currentTimeMillis()-millis);
        millis=days2*86400000;
        this.expirationDate=new Date(System.currentTimeMillis()+millis);
    }

    private void others(String userName){
        this.serviceOwner=userName;
        this.invoiceSeries="A-564sd654".toUpperCase();
        this.descriptionService="Periodo de facturacion de 30 dias iniciando el "+ new Date(this.issueDate.getTime()-2678400000L).toString()
                                +" al "+new Date(this.issueDate.getTime()-86400000L).toString();
    }

    private void generateBalance(){
        DecimalFormat formato1 = new DecimalFormat("#.00");
        this.balance= (float)(Math.random()*2500)+1;
        this.balance=Float.parseFloat(formato1.format(this.balance));
    }
}
