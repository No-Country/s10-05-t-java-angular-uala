package com.noCountry.uala.service.ServicePaymentService;

import com.noCountry.uala.models.dto.ServicePayment.CalculatePaymentDTO;
import com.noCountry.uala.models.entity.ServicePaymentModel.ServicePaymentModel;
import com.noCountry.uala.models.entity.Wallet;
import com.noCountry.uala.repository.ServicePaymentRepository.IServicePayment;
import com.noCountry.uala.security.util.GetUserLogged;
import com.noCountry.uala.service.PaymentsService.impl.WalletServiceIpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class CalculatePaymentService {
    @Autowired
    private GetUserLogged getUserLogged;
    @Autowired
    private IServicePayment servicePayment;

    @Autowired
    private WalletServiceIpl walletService;

    public ResponseEntity<?> calculateBill(CalculatePaymentDTO paymentDTO){
        paymentDTO.calculateInvoice(getUserLogged.userName());
        return new ResponseEntity(paymentDTO, HttpStatus.OK);
    }

    public ResponseEntity<?> savePaymentService(CalculatePaymentDTO paymentDTO){
        ServicePaymentModel model= new ServicePaymentModel(0,""+System.currentTimeMillis()+"", new Date(System.currentTimeMillis()),
                                    paymentDTO.getServiceType(), paymentDTO.getNoService(), paymentDTO.getServiceOwner(),
                                    paymentDTO.getExpirationDate(), paymentDTO.getIssueDate(), paymentDTO.getInvoiceSeries(),
                                    paymentDTO.getBalance(), paymentDTO.getDescriptionService(), false, getUserLogged.walletOfSession());
        if (model.getRefPayment()!=null){
            walletService.discountCash(paymentDTO.getBalance());
            servicePayment.save(model);

            return new ResponseEntity(model, HttpStatus.CREATED);
        }
        return new ResponseEntity(paymentDTO, HttpStatus.BAD_REQUEST);
    }

    public int balancePayment(){
        Wallet wallet=getUserLogged.walletOfSession();
        int totalBalance=0;
        List<ServicePaymentModel> balance = servicePayment.findAll();
        List<ServicePaymentModel> balance2= balance.stream().filter(c-> c.getWalletPayment().getId()==wallet.getId()).toList();
        for (ServicePaymentModel payment:balance2 ) {
            totalBalance+= payment.getBalance();
        }
        return totalBalance;
    }
}
