package com.noCountry.uala.security.util;

import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.repository.WalletRepository;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GetUserLogged {
	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	WalletRepository walletRepository;
	@Autowired UsuarioService usuarioService;
	public Wallet walletOfSession(){
		Usuario usuario1= usuarioRepository.findByNombreUsuario(usuarioService.getUserLogged()).orElseThrow();
		Usuario usuario = usuarioRepository.findByNombre(usuario1.getNombre());
		Wallet wallet = walletRepository.findById((long) usuario.getIdUsuario()).orElseThrow();
		return wallet;
	}
}
