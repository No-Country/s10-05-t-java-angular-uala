package com.noCountry.uala.models.entity.payamentsMethod;

import lombok.*;

import javax.persistence.Entity;
@Builder
@AllArgsConstructor
@Getter
@Setter
@Entity
@NoArgsConstructor
public class CobroExpess extends Payments {
	private int referenceNumber;
}
