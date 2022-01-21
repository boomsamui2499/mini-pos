import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


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

  currentDate: NgbDateStruct | undefined
  startDate: NgbDateStruct | undefined
  endDate : NgbDateStruct | undefined

  constructor(
    private apiServiceService:ApiServiceService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();
    this.startDate = this.calendar.getToday();

    const jsDate = new Date(this.currentDate.year, this.currentDate.month , this.currentDate.day - 7);
    const beforDate = jsDate.getFullYear() +'-' + jsDate.getMonth() + '-' + jsDate.getDate()
    const currentDate = this.currentDate?.year +'-' + this.currentDate?.month + '-' + this.currentDate?.day
    const date = 'startDate=' + beforDate + '&endDate=' + currentDate
    this.apiServiceService.showBillByDate(date).subscribe(data => {
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

  dateClickStart($event: any) {
    console.log(this.startDate?.day);
    const startDate = this.startDate?.year +'-' + this.startDate?.month + '-' + this.startDate?.day
    const endDate = this.endDate?.year +'-' + this.endDate?.month + '-' + this.endDate?.day
    console.log(endDate);
    const date = 'startDate=' + startDate + '&endDate=' + endDate
    this.apiServiceService.showBillByDate(date).subscribe(data => {
      this.billList = data      
      this.billList = this.billList.data
      console.log(this.billList);
    })
  }

  dateClickEnd($event: any) {
    console.log(this.endDate?.day);
    const startDate = this.startDate?.year +'-' + this.startDate?.month + '-' + this.startDate?.day
    const endDate = this.endDate?.year +'-' + this.endDate?.month + '-' + this.endDate?.day
    console.log(endDate);
    const date = 'startDate=' + startDate + '&endDate=' + endDate
    this.apiServiceService.showBillByDate(date).subscribe(data => {
      this.billList = data      
      this.billList = this.billList.data
      console.log(this.billList);
    })
  }

}
