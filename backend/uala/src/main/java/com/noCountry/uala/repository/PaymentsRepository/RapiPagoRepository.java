package com.noCountry.uala.repository.PaymentsRepository;

import com.noCountry.uala.models.entity.payamentsMethod.RapiPago;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RapiPagoRepository extends JpaRepository<RapiPago, Long> {
}