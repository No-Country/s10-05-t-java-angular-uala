package com.noCountry.uala.models.entity;

import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import com.noCountry.uala.security.entity.Usuario;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static com.fasterxml.jackson.databind.cfg.CoercionInputShape.Array;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Wallet {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double balance;
	private  String alias;
	private long cbu;
	@OneToMany(mappedBy = "wallet",cascade = CascadeType.ALL,orphanRemoval =true)
	private  List<Payments> paymentsList = new ArrayList<>();



	public Wallet(double balance, long cbu ) {
		this.balance = balance ;
		this.cbu= cbu;
	}
	public long generatedCbu(){
		long leftLimit = 1L;
		long rightLimit = 1000000000000000000L;
		long cbu = leftLimit + (long) (Math.random() * (rightLimit - leftLimit));
		return cbu;
	}

	public String genericsAlias(){
		Random r = new Random();
		String[] aliasDef = {"manzana","zapatilla","maiz","teclado","rojo","dia","noche","blanco","negro","perro","platano","paloma"};
		String[] aliasDef1 = {"palo","dinero","dev","backend","frontend","gato","backend","telefe","rueda","papel","amarillo"};
		String[] aliasDef2 = {"mariposa","caballo","rosas","pajaro","futbol","disco","hot","zapáto","pato","pc","foca","blanco"};
		int e = r.nextInt(aliasDef.length);
		int f = r.nextInt(aliasDef1.length);
		int g = r.nextInt(aliasDef2.length);
		String alias = (aliasDef[e]+"."+aliasDef1[f]+"."+aliasDef2[g]+".uala");
		return  alias;
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