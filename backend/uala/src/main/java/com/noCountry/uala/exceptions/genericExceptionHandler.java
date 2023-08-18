package com.noCountry.uala.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class genericExceptionHandler {



	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<ResponseError> RuntimeException(RuntimeException runtimeException){
    ResponseError responseError = ResponseError.builder().menssage(runtimeException.getMessage()).build();
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseError);
	}
}
