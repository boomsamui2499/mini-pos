import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.css']
})
export class PaymentReceiptComponent implements OnInit {

  bill: any

  constructor(
    private apiServiceService:ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.apiServiceService.showPayingBill().subscribe(data => {
      this.bill = data
      this.bill = this.bill.data
      console.log(this.bill);
    })
  }

}
