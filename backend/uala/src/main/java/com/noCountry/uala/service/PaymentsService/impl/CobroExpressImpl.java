package com.noCountry.uala.service.PaymentsService.impl;
import com.noCountry.uala.models.entity.payamentsMethod.CobroExpess;
import com.noCountry.uala.repository.PaymentsRepository.CobroExpessRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.PaymentsService.IPayments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import static com.noCountry.uala.enums.PaymentMethods.COBRO_EXPRESS;
@Service
@RequiredArgsConstructor
public class CobroExpressImpl implements IPayments {
	private final CobroExpessRepository cobroExpessRepository;
	private final GetUserLogged getUserLogged;
	@Override
	public boolean registerPayment(double cash) {
		CobroExpess cobroExpess = new CobroExpess();
		if (cobroExpess.calculatePayments(cash)) {
			cobroExpess.setReferenceNumber(numberOfReference());
			cobroExpess.setCashAmount(cash);
			cobroExpess.setWallet(getUserLogged.walletOfSession());
			cobroExpess.setEntity(COBRO_EXPRESS.toString());
			cobroExpessRepository.save(cobroExpess);
			return true;}
		return false;
	}
	public int numberOfReference(){
		return (int) (Math.random()*7000+30000);
	}

}
