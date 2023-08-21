package com.noCountry.uala.models.entity;

import com.noCountry.uala.security.entity.Usuario;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Wallet")
public class Wallet {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double balance;
	private long cbu;

	public Wallet(double balance, long cbu ) {
		this.balance = balance ;
		this.cbu= cbu;
	}

	public double generatedCbu(){
		long cbu  = (long) (Math.random()* 5000000 * 30000);
		return cbu;
	}



	//private List<?> listDeposit = new ArrayList<>();







	public void addDeposit(){
	//	this.listDeposit.add(null);
		//completar cuando agreguemos Depositos
	};
}