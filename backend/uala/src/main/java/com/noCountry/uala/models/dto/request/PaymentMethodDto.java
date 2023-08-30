package com.noCountry.uala.models.dto.request;

import com.noCountry.uala.enums.PaymentMethods;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter @Setter
public class PaymentMethodDto {
	@Enumerated(EnumType.ORDINAL)
	private PaymentMethods paymentMethods;
	private double cashAmount;

}
