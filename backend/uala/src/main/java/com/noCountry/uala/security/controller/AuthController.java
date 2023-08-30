package com.noCountry.uala.security.controller;

import com.noCountry.uala.security.dto.JwtDto;
import com.noCountry.uala.security.dto.LoginUsuario;
import com.noCountry.uala.security.dto.NuevoUsuario;
import com.noCountry.uala.security.service.UsuarioService;
import com.noCountry.uala.security.util.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/api/auth")
public class AuthController {

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/add")
	public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NuevoUsuario nuevoUsuario) {
		usuarioService.saveUser(nuevoUsuario);
			return new ResponseEntity<>(new Mensaje("Created User"), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario ){
	JwtDto jwtDto= usuarioService.login(loginUsuario);
		return new ResponseEntity(jwtDto, HttpStatus.OK);
	}
}