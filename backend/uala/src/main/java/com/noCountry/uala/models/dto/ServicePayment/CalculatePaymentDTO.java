package com.noCountry.uala.models.dto.ServicePayment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
import java.text.DecimalFormat;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CalculatePaymentDTO {
    private String serviceType;
    private String noService;
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
        this.invoiceSeries=calculateInvoiceSerie();
        this.descriptionService="Periodo de facturacion de 30 dias iniciando el "+ new Date(this.issueDate.getTime()-2678400000L).toString()
                                +" al "+new Date(this.issueDate.getTime()-86400000L).toString();
    }

    private String calculateInvoiceSerie(){
        int letraInicial= (int)(Math.random()*25)+65;
        char letra1= (char) letraInicial;
        int letraMedia1= (int)(Math.random()*25)+65;
        char letra2= (char) letraMedia1;
        int letraMedia2= (int)(Math.random()*25)+65;
        char letra3= (char) letraMedia2;
        int cantidad1= (int)(Math.random()*899)+1;
        String valora=System.currentTimeMillis()+"";
        char[] valoraa=valora.toCharArray();
        valora="";
        for (int i = valoraa.length-1; i >valoraa.length-5; i--) {
            valora+=valoraa[i];
        }
        return letra1+"-"+cantidad1+letra2+letra3+valora;
    }

    private void generateBalance(){
        DecimalFormat formato1 = new DecimalFormat("#.00");
        this.balance= (float)(Math.random()*2500)+1;
        this.balance=Float.parseFloat(formato1.format(this.balance));
    }
}
