package com.noCountry.uala.Controller;
import com.noCountry.uala.models.dto.ServicePayment.CalculatePaymentDTO;
import com.noCountry.uala.service.ServicePaymentService.CalculatePaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/service/payment")
public class ServicePaymentController {
    @Autowired
    private CalculatePaymentService paymentService;
    @PostMapping("/calculate/bill")
    public ResponseEntity<?> calculateBill(@RequestBody CalculatePaymentDTO calculatePaymentDTO){
        return paymentService.calculateBill(calculatePaymentDTO);
    }

    @PostMapping("/confirm/service")
    public ResponseEntity<?> confrmiPaymentService(@RequestBody CalculatePaymentDTO paymentDTO){
        return paymentService.savePaymentService(paymentDTO);
    }
}
