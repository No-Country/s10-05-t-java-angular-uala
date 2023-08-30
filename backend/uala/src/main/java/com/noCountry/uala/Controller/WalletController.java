package com.noCountry.uala.Controller;

import com.noCountry.uala.service.PaymentsService.impl.WallerServiceIpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/api/wallet")
public class WalletController {
	private final WallerServiceIpl wallerServiceIpl;
	@GetMapping("/Payments-List")
	public ResponseEntity<?> ListPayments(){
		return new ResponseEntity<>(wallerServiceIpl.paymentsList(), HttpStatus.ACCEPTED);
	}
}
