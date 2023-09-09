package com.noCountry.uala.security.repository;

import com.noCountry.uala.security.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	Usuario findByNombre(String nombre);
	Optional<Usuario> findByNombreUsuario(String nombreUsuario);
	boolean existsByNombreUsuario (String nombreUsuario);
	boolean existsByEmail (String email);

	Usuario findByWallet_Alias(String string);

	Usuario findByWallet_Cbu(int i);
}