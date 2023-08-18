package com.noCountry.uala.exceptions;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ResponseError {
	private String menssage;
}
