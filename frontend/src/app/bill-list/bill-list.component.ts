import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billList: any //แสดง bill
  selectBill: any //แสดง bill ที่กด
  currDiv: any
  billDetails = {totalprice: null, date: null, time: null} //แสดง totalPrice

  constructor(
    private apiServiceService:ApiServiceService
  ) { }

  ngOnInit(): void {
    this.apiServiceService.showBill().subscribe(data => {
      this.billList = data
      this.billList = this.billList.data
      console.log(this.billList);
    })
  }

  selectedBill(id: any, total_price: any, date: any, time: any) {
    this.currDiv = 'click'
    console.log(id);
    this.billDetails = {
      totalprice: total_price,
      date: date,
      time: time
    }
    console.log(this.billDetails);
    
    this.apiServiceService.showBillById(id).subscribe(data => {
      this.selectBill = data
      this.selectBill = this.selectBill.data
      console.log(this.selectBill);
    })
  }

}
