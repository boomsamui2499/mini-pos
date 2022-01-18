import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-pos-sale',
  templateUrl: './pos-sale.component.html',
  styleUrls: ['./pos-sale.component.css']
})
export class PosSaleComponent implements OnInit {

  productList: any //เเสดง product
  categoryList: any //เเสดงชื่อ category
  currentBill: any //แสดง current bill
  selectedCategory: any //เลือก category

  constructor(
    private apiServiceService:ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.selectedCategory = 0
    this.apiServiceService.showSelectCategory(this.selectedCategory).subscribe(data => {
      this.productList = data
      this.productList = this.productList.data
      console.log(this.productList);
    })

    this.apiServiceService.getCategory().subscribe(data => {
      this.categoryList = data;
      this.categoryList = this.categoryList.data
      console.log(this.categoryList);     
    })

    this.apiServiceService.showCurrentBill().subscribe(data => {
      this.currentBill = data;
      this.currentBill = this.currentBill.data
      console.log(this.currentBill);
    })
  }

  selectCategoryId() {
    console.log(this.selectedCategory);    
    this.apiServiceService.showSelectCategory(this.selectedCategory).subscribe(data => {
      this.productList = data
      this.productList = this.productList.data
      console.log(this.productList);
    })
  }

  addProduct(id: any, price: any) {
    const product = {
      product_id: id,
      price : price
    }
    console.log(product);
    
    this.apiServiceService.addProductToCurrentBill(product).subscribe(data => {
      console.log(data);
      this.apiServiceService.showCurrentBill().subscribe(data => {
        this.currentBill = data;
        this.currentBill = this.currentBill.data
        console.log(this.currentBill);
      })
    })
  }

  deleteProductInCurrent(id: any) {
    console.log(id);
    this.apiServiceService.deleteProductInCurrentBill(id).subscribe(data => {
      console.log(data);
      this.apiServiceService.showCurrentBill().subscribe(data => {
        this.currentBill = data;
        this.currentBill = this.currentBill.data
        console.log(this.currentBill);
      })
    })
    
  } 

}
