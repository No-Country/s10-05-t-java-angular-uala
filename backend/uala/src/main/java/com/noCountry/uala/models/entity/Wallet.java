package com.noCountry.uala.models.entity;

import com.noCountry.uala.models.entity.ServicePaymentModel.ServicePaymentModel;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;

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
	@OneToMany(mappedBy = "wallet",cascade = CascadeType.ALL,orphanRemoval =true)
	private  List<Payments> paymentsList = new ArrayList<>();
	@OneToMany(mappedBy = "walletPayment",cascade = CascadeType.ALL,orphanRemoval =true)
	private  List<ServicePaymentModel> servicePaymentsList = new ArrayList<>();


	public Wallet(double balance, long cbu ) {
		this.balance = balance ;
		this.cbu= cbu;
	}
	public double generatedCbu(){
		long cbu  = (long) (Math.random()* 5000000 * 30000);
		return cbu;
	}
	 public  void listPayment(Payments payments){
		paymentsList.add(payments);
	}
	public  double totalList(){
		double cont=0;
		for (Payments payments: paymentsList) {
			cont = cont + payments.getCashAmount();
		}
		return cont;
	}
}