package com.noCountry.uala.service.PaymentsService.impl;

import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Pago24;
import com.noCountry.uala.repository.PaymentsRepository.Pago24Repository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.PaymentsService.IPayments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.noCountry.uala.enums.PaymentMethods.PAGO_24;

@Service
@RequiredArgsConstructor
public class Pago24Serviceimpl implements IPayments {
	private final Pago24Repository pago24Repository;
	private final GetUserLogged getUserLogged;
	@Override
	public boolean registerPayment(double cash) {
		Pago24 pago24  = new Pago24();
		Wallet wallet = getUserLogged.walletOfSession();


		if (pago24.calculatePayments(cash))
		{
			pago24.setReferenceNumber(numberOfReference());
			pago24.setCashAmount(cash);
			pago24Repository.save(pago24);
			wallet.setBalance(cash + wallet.getBalance());
			pago24.setWallet(getUserLogged.walletOfSession());
			pago24.setEntity(PAGO_24.toString());

			pago24Repository.save(pago24);
			return true;
		}
		return false;
	}
	public int numberOfReference(){
		return (int) (Math.random()*7000+30000);
	}
}
