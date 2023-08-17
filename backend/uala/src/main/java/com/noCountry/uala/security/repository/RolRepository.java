package com.noCountry.uala.security.repository;


import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolRepository extends JpaRepository<Rol, Integer> {
	Optional<Rol> findByRolNombre(RolNombre rolNombre);
}