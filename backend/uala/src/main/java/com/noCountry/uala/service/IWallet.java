package com.noCountry.uala.service;

import com.noCountry.uala.models.entity.payamentsMethod.Payments;

import java.util.List;

public interface IWallet {
	List<Payments> paymentsList();

}
