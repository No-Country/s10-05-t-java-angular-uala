package com.noCountry.uala.security.service;



import com.noCountry.uala.models.dto.request.UserCbuOrAliasRequestDto;
import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.models.entity.payamentsMethod.Payments;
import com.noCountry.uala.repository.WalletRepository;
import com.noCountry.uala.security.dto.JwtDto;
import com.noCountry.uala.security.dto.LoginUsuario;
import com.noCountry.uala.security.dto.NuevoUsuario;
import com.noCountry.uala.security.dto.UserResponseDto;
import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.entity.mapper.UserMapper;
import com.noCountry.uala.security.enums.RolNombre;
import com.noCountry.uala.security.jwt.JwtProvider;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.util.GetUserLogged;
import lombok.RequiredArgsConstructor;
import org.slf4j.ILoggerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
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
	private final UserMapper userMapper;
	private final WalletRepository walletRepository;

	private final static Logger logger = LoggerFactory.getLogger(UsuarioService.class);

	public Optional<Usuario> getByUsuario(String nombreUsuario) {
		return usuarioRepository.findByNombreUsuario(nombreUsuario);
	}

	public Boolean existsByUsuario(String nombreUsuario) {
		return usuarioRepository.existsByNombreUsuario(nombreUsuario);
	}

	public Boolean existsByEmail(String email) {
		return usuarioRepository.existsByEmail(email);
	}

	public void save(Usuario usuario) {
		usuarioRepository.save(usuario);
	}

	public void saveUser(NuevoUsuario nuevoUsuario) {
		Usuario usuario = new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
				nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));
		Set<Rol> roles = new HashSet<>();
		roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).orElseThrow());
		if (nuevoUsuario.getRoles().contains("admin"))
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
		usuario.setRoles(roles);
		Wallet wallet = new Wallet();
		wallet.setBalance(00.00);
		wallet.setAlias(wallet.genericsAlias());
		System.out.println("==============================================================================");
		System.out.println(wallet.genericsAlias());
		System.out.println("==============================================================================");
		wallet.setCbu((long) wallet.generatedCbu());
		usuario.setWallet(wallet);
		usuarioRepository.save(usuario);
	}

	public JwtDto login(LoginUsuario loginUsuario) {
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
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null) {
			String usuario = authentication.getName();
			return usuario;
		}
		return null;
	}

	public UserResponseDto userOfSession() {
		Usuario usuario1 = usuarioRepository.findByNombreUsuario(this.getUserLogged()).orElseThrow();
		Usuario usuario = usuarioRepository.findByNombre(usuario1.getNombre());
		UserResponseDto responseDto = userMapper.EntityToDto(usuario);
		return responseDto;
	}

	public UserResponseDto getUserForCbuOrAlias(UserCbuOrAliasRequestDto dato) {
		if (dato.getValor() instanceof String) {
			System.out.println(dato.getValor());
			Wallet wallet1 = walletRepository.findByAlias(dato.getValor().toString());
			System.out.println("____________________________>" + wallet1);
			System.out.println("-------------------------------------------");
			Usuario usuario = usuarioRepository.findById(wallet1.getId().intValue()).orElseThrow();
			UserResponseDto responseDto = userMapper.EntityToDto(usuario);
			System.out.println(responseDto);
			return responseDto;
		} else {
			System.out.println(dato.getValor());
			Wallet wallet = walletRepository.findByCbu(((Long) dato.getValor()).longValue());
			System.out.println(wallet);
			Usuario usuario1 = usuarioRepository.findById(wallet.getId().intValue()).orElseThrow();
			UserResponseDto responseDto1 = userMapper.EntityToDto(usuario1);
			return responseDto1;
		}
	}




}