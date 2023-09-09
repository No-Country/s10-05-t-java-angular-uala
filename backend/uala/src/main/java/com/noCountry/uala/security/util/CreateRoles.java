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
		if (rol.isEmpty()) {
			Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
			Rol rolUser = new Rol(RolNombre.ROLE_USER);
			rolService.save(rolAdmin);
			rolService.save(rolUser);

			Usuario usuario1 = new Usuario();
			usuario1.setNombre("Kevin");
			usuario1.setApellido("Mitnick");
			usuario1.setNombreUsuario("Mitnick_63");
			usuario1.setEmail("Mitnick_63@gmail.com");
			usuario1.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles = new HashSet<>();
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario1.setRoles(roles);
			Wallet wallet1 = new Wallet();
			wallet1.setBalance(00.00);
			wallet1.setAlias(wallet1.genericsAlias());
			wallet1.setCbu(wallet1.generatedCbu());
			usuario1.setWallet(wallet1);
			usuarioRepository.save(usuario1);

			Usuario usuario2 = new Usuario();
			usuario2.setNombre("James");
			usuario2.setApellido("Gosling");
			usuario2.setNombreUsuario("James_Gosling");
			usuario2.setEmail("gosling_1994@uala.com");
			usuario2.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles2 = new HashSet<>();
			roles2.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario2.setRoles(roles2);
			Wallet wallet2 = new Wallet();
			wallet2.setBalance(00.00);
			wallet2.setAlias(wallet2.genericsAlias());
			wallet2.setCbu(wallet2.generatedCbu());
			usuario2.setWallet(wallet2);
			usuarioRepository.save(usuario2);

			Usuario usuario3 = new Usuario();
			usuario3.setNombre("Alan");
			usuario3.setApellido("Turing");
			usuario3.setNombreUsuario("turing_ace");
			usuario3.setEmail("turing_ace@uala.com");
			usuario3.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles3 = new HashSet<>();
			roles3.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario3.setRoles(roles3);
			Wallet wallet3 = new Wallet();
			wallet3.setBalance(00.00);
			wallet3.setAlias(wallet3.genericsAlias());
			wallet3.setCbu(wallet3.generatedCbu());
			usuario3.setWallet(wallet3);
			usuarioRepository.save(usuario3);

			Usuario usuario4 = new Usuario();
			usuario4.setNombre("Tim");
			usuario4.setApellido("Berners-Lee");
			usuario4.setNombreUsuario("Berners_HTTP");
			usuario4.setEmail("bernes_html@uala.com");
			usuario4.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles4 = new HashSet<>();
			roles4.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario4.setRoles(roles4);
			Wallet wallet4 = new Wallet();
			wallet4.setBalance(00.00);
			wallet4.setAlias(wallet4.genericsAlias());
			wallet4.setCbu(wallet4.generatedCbu());
			usuario4.setWallet(wallet4);
			usuarioRepository.save(usuario4);

			Usuario usuario5 = new Usuario();
			usuario5.setNombre("Guido");
			usuario5.setApellido(" Van Rossum");
			usuario5.setNombreUsuario(" Van_Rossum");
			usuario5.setEmail("guido_python@uala.com");
			usuario5.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles5 = new HashSet<>();
			roles5.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario5.setRoles(roles5);
			Wallet wallet5 = new Wallet();
			wallet5.setBalance(00.00);
			wallet5.setAlias(wallet5.genericsAlias());
			wallet5.setCbu(wallet5.generatedCbu());
			usuario5.setWallet(wallet5);
			usuarioRepository.save(usuario5);

			Usuario usuario6 = new Usuario();
			usuario6.setNombre("Dennis");
			usuario6.setApellido("Ritchie");
			usuario6.setNombreUsuario("C_Ritchie");
			usuario6.setEmail("Dennis_android@uala.com");
			usuario6.setPassword(passwordEncoder.encode("123456"));
			Set<Rol> roles6 = new HashSet<>();
			roles6.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
			usuario6.setRoles(roles6);
			Wallet wallet6 = new Wallet();
			wallet6.setBalance(00.00);
			wallet6.setAlias(wallet6.genericsAlias());
			wallet6.setCbu(wallet6.generatedCbu());
			usuario6.setWallet(wallet6);
			usuarioRepository.save(usuario6);
		}
		}

}

