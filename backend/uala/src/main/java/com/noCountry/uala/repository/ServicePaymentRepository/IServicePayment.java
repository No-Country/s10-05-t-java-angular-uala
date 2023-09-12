package com.noCountry.uala.repository.ServicePaymentRepository;

import com.noCountry.uala.models.entity.ServicePaymentModel.ServicePaymentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IServicePayment extends JpaRepository<ServicePaymentModel, Long> {
}
