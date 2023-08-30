package com.noCountry.uala.security.service;


import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.repository.WalletRepository;
import com.noCountry.uala.security.dto.JwtDto;
import com.noCountry.uala.security.dto.LoginUsuario;
import com.noCountry.uala.security.dto.NuevoUsuario;
import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.enums.RolNombre;
import com.noCountry.uala.security.jwt.JwtProvider;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.service.RolService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
public class UsuarioService {
	@Autowired
	@Lazy
	PasswordEncoder passwordEncoder;
	@Autowired
	@Lazy
	AuthenticationManager authenticationManager;
	private final RolService rolService;
	private final JwtProvider jwtProvider;
	private final UsuarioRepository usuarioRepository;
	private final WalletRepository walletRepository;

	public Optional<Usuario> getByUsuario(String nombreUsuario){
		return usuarioRepository.findByNombreUsuario(nombreUsuario);
	}
	public Boolean existsByUsuario(String nombreUsuario){
		return usuarioRepository.existsByNombreUsuario(nombreUsuario);
	}

	public Boolean existsByEmail(String email){
		return usuarioRepository.existsByEmail(email);
	}

	public void save(Usuario usuario){
		usuarioRepository.save(usuario);
	}

	public void saveUser(NuevoUsuario nuevoUsuario){

		Usuario usuario = new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
				nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));
		Set<Rol> roles = new HashSet<>();
		roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).orElseThrow());
		if(nuevoUsuario.getRoles().contains("admin"))
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
		usuario.setRoles(roles);
		Wallet wallet = new Wallet();
		wallet.setBalance(00.00);
		wallet.setCbu((long) wallet.generatedCbu());
		usuario.setWallet(wallet);
        usuarioRepository.save(usuario);
	}
	public JwtDto login(LoginUsuario loginUsuario ){
		Authentication authentication = authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(),
								loginUsuario.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtProvider.generateToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
		return jwtDto;
	}

	public String getUserLogged() {
		Authentication authentication =SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null) {
			String  usuario = authentication.getName();
			return  usuario;
		}
		return null;
	}




}