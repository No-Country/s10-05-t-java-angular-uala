package com.noCountry.uala.security.controller;

import com.noCountry.uala.security.dto.JwtDto;
import com.noCountry.uala.security.dto.LoginUsuario;
import com.noCountry.uala.security.dto.NuevoUsuario;
import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.entity.Usuario;
import com.noCountry.uala.security.enums.RolNombre;
import com.noCountry.uala.security.jwt.JwtProvider;
import com.noCountry.uala.security.repository.UsuarioRepository;
import com.noCountry.uala.security.service.RolService;
import com.noCountry.uala.security.service.UsuarioService;
import com.noCountry.uala.security.util.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/v1/api/auth")
public class AuthController {

	@Autowired
	private UsuarioService usuarioService;

	//Espera un json y lo convierte a tipo clase NuevoUsuario
	@PostMapping("/add")
	public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NuevoUsuario nuevoUsuario) {
		usuarioService.saveUser(nuevoUsuario);
		return new ResponseEntity<>(new Mensaje("Usuario creado"), HttpStatus.CREATED);
	}


	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario ){
	JwtDto jwtDto= usuarioService.login(loginUsuario);
		return new ResponseEntity(jwtDto, HttpStatus.OK);
	}
}