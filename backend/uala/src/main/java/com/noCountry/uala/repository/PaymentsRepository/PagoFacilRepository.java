package com.noCountry.uala.repository.PaymentsRepository;

import com.noCountry.uala.models.entity.payamentsMethod.PagoFacil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagoFacilRepository extends JpaRepository<PagoFacil, Long> {
}