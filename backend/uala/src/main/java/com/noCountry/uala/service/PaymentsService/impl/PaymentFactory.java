package com.noCountry.uala.service.PaymentsService.impl;
import com.noCountry.uala.models.dto.request.PaymentMethodDto;
import com.noCountry.uala.service.PaymentsService.IPayments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentFactory {

	private final  PagoFacilServiceIpl pagoFacilServiceIpl;
	private final RapiPagoServiceImpl  rapiPagoServiceImpl;
	private final Pago24Serviceimpl pago24Serviceimpl;
	private final  CobroExpressImpl cobroExpressImpl;
	private final  TransferImpl transferImpl;
	public IPayments register(PaymentMethodDto paymentsMethods){
		return switch (paymentsMethods.getPaymentMethods()){
			case PAGO_FACIL -> pagoFacilServiceIpl;
			case RAPIPAGO -> rapiPagoServiceImpl;
			case COBRO_EXPRESS-> cobroExpressImpl;
			case PAGO_24-> pago24Serviceimpl;
			case TRANSFERENCIA -> transferImpl;
			default -> throw new RuntimeException("Error when making the payment");
		};
	}
}
