import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-pos-sale',
  templateUrl: './pos-sale.component.html',
  styleUrls: ['./pos-sale.component.css']
})
export class PosSaleComponent implements OnInit {

  productList: any
  categoryList: any
  selectedCategory: any
  selectedProduct: any
  dataSource: any[] = [];
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

  addProduct(id: any) {
    console.log(id);
    this.dataSource.push(this.dataSource.length);
  }

}
