package com.noCountry.uala.models.entity.payamentsMethod;

import lombok.*;

import javax.persistence.Entity;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class RapiPago  extends Payments  {
	private int referenceNumber;
}
