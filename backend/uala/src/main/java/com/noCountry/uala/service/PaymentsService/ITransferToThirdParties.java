package com.noCountry.uala.service.PaymentsService;

import com.noCountry.uala.models.dto.request.TranferMethodDto;
import com.noCountry.uala.models.dto.request.UserCbuOrAliasRequestDto;
import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.security.dto.UserResponseDto;
import com.noCountry.uala.security.entity.Usuario;

public interface ITransferToThirdParties {

	public abstract boolean sendTransfer(TranferMethodDto tranferMethodDto);
	public abstract UserResponseDto  findToCbuOrAlias(UserCbuOrAliasRequestDto dato);
	public abstract UserResponseDto  findToC(Object d );





}
