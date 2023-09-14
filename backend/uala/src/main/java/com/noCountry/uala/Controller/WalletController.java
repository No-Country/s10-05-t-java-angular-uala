package com.noCountry.uala.Controller;


import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.security.dto.UserResponseDto;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.service.PaymentsService.impl.WalletServiceIpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/v1/api/wallet")
@RequiredArgsConstructor
public class WalletController {
	private final WalletServiceIpl walletServiceIpl;
	private final UsuarioRepository usuarioRepository;


	@GetMapping("/Payments-List")
	public ResponseEntity<?> ListPayments(){
		return new ResponseEntity<>(walletServiceIpl.paymentsList(), HttpStatus.ACCEPTED);
	}

	@GetMapping("/contact")
	public ResponseEntity<?> getAllContacts() {
		List<UserResponseDto> usuario = walletServiceIpl.contactList();
		return ResponseEntity.ok().body(usuario);
	}


}
