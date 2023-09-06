package com.noCountry.uala.security.dto;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {
      private int idUser;
	  private String name;
	  private String nameUser;
	  private String email;
	  private double balance ;
	  private long CBU;
	  private String alias;


}
