package com.noCountry.uala.service.ServicePaymentService;

import com.noCountry.uala.models.dto.ServicePayment.CalculatePaymentDTO;
import com.noCountry.uala.models.dto.ServicePayment.RechargeMovilServiceDTO;
import com.noCountry.uala.models.dto.ServicePayment.ResponseServiceAndRechargeDTO;
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
import java.util.ArrayList;
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

    public ResponseEntity<?> saveRechargeService(RechargeMovilServiceDTO rechargeMovilDTO){
        rechargeMovilDTO.generateDateBuy();
        ServicePaymentModel model= new ServicePaymentModel(0,""+System.currentTimeMillis()+"", new Date(System.currentTimeMillis()),
                rechargeMovilDTO.getEmpresa(), rechargeMovilDTO.getNoService(), getUserLogged.userName(),
                null, null, rechargeMovilDTO.getInvoiceSeries(),
                (float)rechargeMovilDTO.getPrice(), "", true, getUserLogged.walletOfSession());
        if (model.getRefPayment()!=null){
            walletService.discountCash(rechargeMovilDTO.getPrice());
            servicePayment.save(model);

            return new ResponseEntity(model, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(rechargeMovilDTO, HttpStatus.BAD_REQUEST);
    }
    public ResponseEntity<?> findAllServiceAndRecharge(){
        Wallet wallet=getUserLogged.walletOfSession();
        List<ServicePaymentModel> findAllData = servicePayment.findAll();
        List<ServicePaymentModel> findAll = findAllData.stream().filter(data->data.getWalletPayment()==wallet).toList();
        List<ServicePaymentModel> servicio=findAll.stream().filter(data->data.isRecharger()==false).toList();
        List<ServicePaymentModel> recharge=findAll.stream().filter(data->data.isRecharger()==true).toList();
        ResponseServiceAndRechargeDTO response = new ResponseServiceAndRechargeDTO();
        List<CalculatePaymentDTO> listService = new ArrayList<>();
        List<RechargeMovilServiceDTO> listRecharge = new ArrayList<>();
        for (int i = servicio.size()-1; i >=0 ; i--) {
            listService.add(new CalculatePaymentDTO(servicio.get(i).getServiceType(),servicio.get(i).getNoService(),
                    servicio.get(i).getServiceOwner(),servicio.get(i).getExpirationDate(), servicio.get(i).getIssueDate(),
                    servicio.get(i).getInvoiceSeries(),servicio.get(i).getBalance(),servicio.get(i).getDescriptionService(),
                    servicio.get(i).getPaymentDate()));
        }
        for (int i =recharge.size()-1 ; i >=0; i--) {
            listRecharge.add(new RechargeMovilServiceDTO(recharge.get(i).getServiceType(), recharge.get(i).getNoService(),
                    recharge.get(i).getBalance(), recharge.get(i).getPaymentDate(),recharge.get(i).getRefPayment(),
                    recharge.get(i).getInvoiceSeries()));
        }
        response.setRecharge(listRecharge);
        response.setService(listService);
        response.calculateBalanceService();
        response.calculateBalanceRecharge();
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
