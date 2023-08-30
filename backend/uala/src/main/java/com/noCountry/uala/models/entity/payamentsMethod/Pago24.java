package com.noCountry.uala.models.entity.payamentsMethod;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Builder
@AllArgsConstructor
@Getter @Setter
@Entity
@NoArgsConstructor
public class Pago24 extends Payments {
	private int referenceNumber;
}