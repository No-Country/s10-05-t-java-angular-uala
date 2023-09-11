package com.noCountry.uala.repository.PaymentsRepository;

import com.noCountry.uala.models.entity.payamentsMethod.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
}