package com.noCountry.uala.service.PaymentsService.impl;
import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import com.noCountry.uala.repository.WalletRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.IWallet;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
@RequiredArgsConstructor
public class WalletServiceIpl implements IWallet {

	private final WalletRepository repository ;
	private final GetUserLogged getUserLogged;
	@Override
	public List<Payments> paymentsList() {
		Wallet wallet =   getUserLogged.walletOfSession();
		return wallet.getPaymentsList().stream().toList();




	}
}
