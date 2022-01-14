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
  selectedCategory: any //เลือก category
  dataSource: any[] = [] //loop div product ที่กด

  check: Array<{id: any, value: any}> = []
  productInBill: Array<{id: any, name: any, price:any, amount: number}> = []

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
  }

  selectCategoryId() {
    console.log(this.selectedCategory);    
    this.apiServiceService.showSelectCategory(this.selectedCategory).subscribe(data => {
      this.productList = data
      this.productList = this.productList.data
      console.log(this.productList);
    })
  }

  addProduct(productId: any, productName: any, productPrice: any) {
    console.log(productId);
    if (this.check.indexOf(productId) == -1) {
      this.check.push(productId)
      console.log('put it');
      console.log(this.check);   


      // var chekObj = {id: productId, value:1}
      // this.check.push(chekObj)
      // console.log('put it');
      // console.log(this.check); 


      var obj = {id: productId, name: productName, price:productPrice, amount:1}
      this.productInBill.push(obj)
      console.log(this.productInBill);
      this.dataSource.push(this.dataSource.length); 
    }
    else {
      console.log('alrady have');
    }
    
  }

}
