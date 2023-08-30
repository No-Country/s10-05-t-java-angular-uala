package com.noCountry.uala.Controller;

import com.noCountry.uala.service.PaymentsService.impl.WalletServiceIpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/api/wallet")
public class WalletController {
	private final WalletServiceIpl walletServiceIpl;
	@GetMapping("/Payments-List")
	public ResponseEntity<?> ListPayments(){
		return new ResponseEntity<>(walletServiceIpl.paymentsList(), HttpStatus.ACCEPTED);
	}
}
