package com.noCountry.uala.Controller;
import com.noCountry.uala.models.dto.ServicePayment.CalculatePaymentDTO;
import com.noCountry.uala.models.dto.ServicePayment.RechargeMovilServiceDTO;
import com.noCountry.uala.service.ServicePaymentService.CalculatePaymentService;
import org.apache.coyote.http11.filters.IdentityOutputFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/calculate/balance")
    public int totalBalance(){
        return paymentService.balancePayment();
    }

    @PostMapping("/confirm/recharge")
    public ResponseEntity<?> confirmRechargeService(@RequestBody RechargeMovilServiceDTO movilServiceDTO){
        return paymentService.saveRechargeService(movilServiceDTO);
    }
    @GetMapping("/history/payments")
    public ResponseEntity<?> historyPaymentsAndRecharge(){
        return paymentService.findAllServiceAndRecharge();
    }
}
