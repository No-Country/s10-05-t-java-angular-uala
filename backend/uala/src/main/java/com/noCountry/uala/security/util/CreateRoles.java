package com.noCountry.uala.security.util;


import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.enums.RolNombre;
import com.noCountry.uala.security.repository.RolRepository;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.service.RolService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class CreateRoles implements CommandLineRunner {
	public final RolService rolService;
	public final RolRepository rolRepository;
	private final UsuarioRepository usuarioRepository;
	@Autowired
	@Lazy
	PasswordEncoder passwordEncoder;
	@Override
	public void run(String... args) throws Exception {

		List<Rol> rol = rolRepository.findAll();
		if (rol.isEmpty())
		{
			Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
			Rol rolUser = new Rol(RolNombre.ROLE_USER);
			rolService.save(rolAdmin);
			rolService.save(rolUser);

			Usuario usuario1 = new Usuario();
			usuario1.setNombre("Marcos");
			usuario1.setNombreUsuario("Marcos192000");
			usuario1.setEmail("marcosep192000@gmail.com");
			usuario1.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles = new HashSet<>();
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario1.setRoles(roles);
			Wallet wallet = new Wallet();
			wallet.setBalance(00.00);
			wallet.setAlias(wallet.genericsAlias());
			wallet.setCbu((long) wallet.generatedCbu());
			usuario1.setWallet(wallet);
			usuarioRepository.save(usuario1);

			Usuario usuario2 = new Usuario();
			usuario2.setNombre("Martin");
			usuario2.setNombreUsuario("Martin2016");
			usuario2.setEmail("uala@uala.com");
			usuario2.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles2 = new HashSet<>();
			roles2.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario2.setRoles(roles2);
			Wallet wallet2 = new Wallet();
			wallet2.setBalance(00.00);
			wallet2.setAlias(wallet2.genericsAlias());
			wallet2.setCbu((long) wallet.generatedCbu());
			usuario2.setWallet(wallet2);
			usuarioRepository.save(usuario2);
		}




	}
}

