package com.noCountry.uala.models.entity.payamentsMethod;
import com.noCountry.uala.enums.PaymentMethods;
import lombok.*;

import javax.persistence.Entity;


import static com.noCountry.uala.enums.PaymentMethods.TRANSFERENCIA;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Transfer extends Payments {
	private PaymentMethods paymentMethods = TRANSFERENCIA;
	private int referenceNumber;
}