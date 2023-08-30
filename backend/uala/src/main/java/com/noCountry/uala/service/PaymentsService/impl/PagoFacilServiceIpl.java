package com.noCountry.uala.service.PaymentsService.impl;
import com.noCountry.uala.models.entity.payamentsMethod.PagoFacil;
import com.noCountry.uala.repository.PaymentsRepository.PagoFacilRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.PaymentsService.IPayments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import static com.noCountry.uala.enums.PaymentMethods.PAGO_FACIL;
@Service
@RequiredArgsConstructor
public class PagoFacilServiceIpl implements IPayments {

	private final PagoFacilRepository pagoFacilRepository;
	private final GetUserLogged getUserLogged;
	@Override
	public boolean registerPayment(double cash) {
		PagoFacil pagoFacil = new PagoFacil();
		if (pagoFacil.calculatePayments(cash))
		{
			pagoFacil.setReferenceNumber(numberOfReference());
			pagoFacil.setCashAmount(cash);
            pagoFacil.setWallet(getUserLogged.walletOfSession());
			pagoFacil.setEntity(PAGO_FACIL.toString());
			pagoFacilRepository.save(pagoFacil);
			return true;
		}
		return false;
	}
	public int numberOfReference(){
		return (int) (Math.random()*90000+30000);
	}

}
