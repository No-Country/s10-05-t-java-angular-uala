package com.noCountry.uala.models.entity.payamentsMethod;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.noCountry.uala.models.entity.Wallet;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "payments")
@Inheritance(strategy = InheritanceType.JOINED)
public class Payments {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate date = LocalDate.now();
	private double cashAmount;
	private String entity;


    @JsonIgnore
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="wallet_id")
	private Wallet wallet;

	public boolean calculatePayments(double amount)
	{
		final double IVA= 1.21;
		final double COMICION_MIN = 1.5;
		final double COMICION_MAX = 3.5;
		return amount >= 300;
	}
}