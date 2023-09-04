package com.noCountry.uala.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

//@Configuration
public class CorsConfig {
    //@Bean
    /*
    public CorsFilter corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:4200"); // Agregar aquí los orígenes permitidos
        config.addAllowedOrigin("https://s10-05-t-java-angular-uala.web.app");
        config.addAllowedHeader("*"); // Permite cualquier cabecera
        config.addAllowedMethod("*"); // Permite cualquier método (GET, POST, etc.)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    */
}
