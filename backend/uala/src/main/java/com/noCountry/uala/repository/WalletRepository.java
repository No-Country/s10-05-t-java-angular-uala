package com.noCountry.uala.repository;

import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {


}