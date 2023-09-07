package com.noCountry.uala.Controller;
import com.noCountry.uala.models.dto.ServicePayment.CalculatePaymentDTO;
import com.noCountry.uala.models.entity.ServicePaymentModel.ServicePayment;
import com.noCountry.uala.security.util.GetUserLogged;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/api/service/payment")
public class ServicePaymentController {
    private final GetUserLogged getUserLogged;

    @PostMapping("/calculate/bill")
    public ResponseEntity<?> calculateBill(@RequestBody CalculatePaymentDTO calculatePaymentDTO){
        calculatePaymentDTO.calculateInvoice(getUserLogged.userName());
        return new ResponseEntity<>(calculatePaymentDTO, HttpStatus.CREATED);
    }
}
