package com.noCountry.uala.security.entity.mapper;

import com.noCountry.uala.security.dto.UserResponseDto;
import com.noCountry.uala.security.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
	public UserResponseDto EntityToDto(Usuario usuario){
		UserResponseDto responseDto = new UserResponseDto();
        responseDto.setIdUser(usuario.getIdUsuario());
		responseDto.setName(usuario.getNombre());
		responseDto.setApellido(usuario.getApellido());
		responseDto.setNameUser(usuario.getNombreUsuario());
        responseDto.setEmail(usuario.getEmail());
		responseDto.setAlias(usuario.getWallet().getAlias());
		responseDto.setBalance(usuario.getWallet().totalList());
		responseDto.setCBU(usuario.getWallet().getCbu());
		return responseDto;
	}
}
