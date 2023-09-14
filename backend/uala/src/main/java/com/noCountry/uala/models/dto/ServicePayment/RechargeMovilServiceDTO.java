package com.noCountry.uala.models.dto.ServicePayment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RechargeMovilServiceDTO {
    private String empresa;
    private String noService;
    private double price;
    private Date dateBuy;
    private String refPayment;
    private String invoiceSeries;

    public void generateDateBuy(){
        this.dateBuy=new Date(System.currentTimeMillis());
        this.invoiceSeries=calculateInvoiceSerie();
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
}
