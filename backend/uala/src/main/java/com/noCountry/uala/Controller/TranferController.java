package com.noCountry.uala.Controller;

import akka.http.javadsl.Http;
import com.noCountry.uala.models.dto.request.TranferMethodDto;
import com.noCountry.uala.models.dto.request.UserCbuOrAliasRequestDto;
import com.noCountry.uala.service.PaymentsService.impl.TransferImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/transfer")
@RequiredArgsConstructor
public class TranferController {
public final TransferImpl transferImpl;
	@PostMapping("/send")
	public ResponseEntity<?> send(@RequestBody TranferMethodDto tranfer){
		return new ResponseEntity<>(transferImpl.sendTransfer(tranfer), HttpStatus.ACCEPTED );
	}
	@GetMapping("/find-cbu-alias")
	public ResponseEntity<?> findCbuOrAlias(@RequestBody UserCbuOrAliasRequestDto data){
		return new ResponseEntity<>(transferImpl.findToCbuOrAlias(data), HttpStatus.ACCEPTED );
	}


}
