import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  currentBill: any

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.apiServiceService.showTotalPrice().subscribe(data => {
      this.currentBill = data
      this.currentBill = this.currentBill.totalprice
      console.log(this.currentBill[0].total);
      console.log(data);
    })
  }

  createBill() {
    this.apiServiceService.pay().subscribe(data => {
      console.log(data);
    })
    console.log('test');
    this.router.navigateByUrl('payment_receipt')
  }

}
