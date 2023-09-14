package com.noCountry.uala.models.dto.request;
import lombok.Getter;
import lombok.Setter;



@Getter @Setter
public class TranferMethodDto {

	private Object valor;
	private double cashAmount;
	private String Reason;
	private String message;
}
