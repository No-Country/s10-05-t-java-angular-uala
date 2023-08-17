package com.noCountry.uala.security.util;


import com.noCountry.uala.security.entity.Rol;
import com.noCountry.uala.security.enums.RolNombre;
import com.noCountry.uala.security.repository.RolRepository;
import com.noCountry.uala.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import java.util.List;

@Component
public class CreateRoles implements CommandLineRunner {

	@Autowired
	RolService rolService;
	@Autowired
	RolRepository rolRepository;
	@Override
	public void run(String... args) throws Exception {

		List<Rol> rol = rolRepository.findAll();
		if (rol.isEmpty())
		{
			Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
			Rol rolUser = new Rol(RolNombre.ROLE_USER);
			rolService.save(rolAdmin);
			rolService.save(rolUser);
		}

	}
}

