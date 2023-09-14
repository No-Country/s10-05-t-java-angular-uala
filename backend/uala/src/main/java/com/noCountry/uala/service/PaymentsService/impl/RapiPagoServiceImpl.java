package com.noCountry.uala.service.PaymentsService.impl;

import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.RapiPago;
import com.noCountry.uala.repository.PaymentsRepository.RapiPagoRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.PaymentsService.IPayments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.noCountry.uala.enums.PaymentMethods.RAPIPAGO;

@Service
@RequiredArgsConstructor
public class RapiPagoServiceImpl implements IPayments {

	private final RapiPagoRepository rapiPagoRepository;
	private final GetUserLogged getUserLogged;
	@Override
	public boolean registerPayment(double cash) {
		RapiPago rapiPago = new RapiPago();
	    Wallet wallet = getUserLogged.walletOfSession();
		if (rapiPago.calculatePayments(cash))
		{
			rapiPago.setReferenceNumber(numberOfReference());
			rapiPago.setCashAmount(cash);
			rapiPago.setWallet(wallet);
			wallet.setBalance(cash + wallet.getBalance());
			rapiPago.setEntity(RAPIPAGO.toString());
			rapiPagoRepository.save(rapiPago);
			return true;
		}
		return false;
	}
	public int numberOfReference(){
		return (int) (Math.random()*90000+7000000);
	}
}
