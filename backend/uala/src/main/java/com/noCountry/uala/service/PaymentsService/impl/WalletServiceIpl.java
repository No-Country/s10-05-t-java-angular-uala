package com.noCountry.uala.service.PaymentsService.impl;
import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import com.noCountry.uala.repository.WalletRepository;
import com.noCountry.uala.security.dto.UserResponseDto;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.entity.mapper.UserMapper;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.IWallet;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class WalletServiceIpl implements IWallet {
	private final WalletRepository repository ;
	private final GetUserLogged getUserLogged;
	private final UsuarioRepository usuarioRepository;
	private final UserMapper mapper;
	@Override
	public List<Payments> paymentsList() {
		Wallet wallet =   getUserLogged.walletOfSession();
		return wallet.getPaymentsList().stream().toList();
	}



	@Override
	public void addCashWallet(double cash) {
		Wallet wallet = getUserLogged.walletOfSession();
		wallet.setBalance(wallet.getBalance() + cash);
		repository.save(wallet);

	}
	public List<UserResponseDto> contactList() {
		Wallet wallet = getUserLogged.walletOfSession();
		Usuario usuario = usuarioRepository.findById(wallet.getId().intValue()).orElseThrow();

//		customerRepository.findAll().stream()
//				.map(customer -> customerMapper.fromEntityToDto(customer))
//				.collect(Collectors.toList());
//	}
		Set<Usuario> noR = new HashSet<>(usuario.getContactos());
		List<Usuario> listaSinDuplicados = new ArrayList<>(noR);

		return listaSinDuplicados.stream().map(customer -> mapper.EntityToDto(customer)).toList();
	}


	public void addPayment(Payments payments) {

	}

}
