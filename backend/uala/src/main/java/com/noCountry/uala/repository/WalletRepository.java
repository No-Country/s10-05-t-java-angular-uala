package com.noCountry.uala.repository;

import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {
	Wallet findByCbu(long cbu);
	Wallet findByAlias(String alias);
	@Override
	Optional<Wallet> findById(Long aLong);
}