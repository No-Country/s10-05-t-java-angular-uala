package com.noCountry.uala.Controller;

import com.noCountry.uala.models.dto.request.PaymentMethodDto;
import com.noCountry.uala.service.PaymentsService.IPayments;
import com.noCountry.uala.service.PaymentsService.impl.PaymentFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/api/payment")
public class paymentMethodController {
	private final PaymentFactory paymentFactory;

	@PostMapping("/method")
	public ResponseEntity<?> register(@Valid @RequestBody PaymentMethodDto paymentMethod){
		  IPayments payments =  paymentFactory.register(paymentMethod);
		return new ResponseEntity(payments.registerPayment(paymentMethod.getCashAmount()), HttpStatus.CREATED);
	}


}
