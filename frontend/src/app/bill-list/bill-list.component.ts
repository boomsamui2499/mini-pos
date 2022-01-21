import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


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

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;


  constructor(
    private apiServiceService:ApiServiceService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit(): void {

    // this.apiServiceService.showBillByDate(date).subscribe(data => {
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


  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
