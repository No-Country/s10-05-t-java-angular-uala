package com.noCountry.uala.security.repository;

import com.noCountry.uala.security.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	Optional<Usuario> findByNombreUsuario(String nombreUsuario);
	boolean existsByNombreUsuario (String nombreUsuario);
	boolean existsByEmail (String email);
}