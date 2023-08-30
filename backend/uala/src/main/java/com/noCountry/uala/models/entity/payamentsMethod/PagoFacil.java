package com.noCountry.uala.models.entity.payamentsMethod;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Builder
@AllArgsConstructor
@Getter @Setter
@Entity
@NoArgsConstructor
public class PagoFacil extends Payments {
	private int referenceNumber;
}