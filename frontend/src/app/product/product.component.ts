import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private apiServiceService:ApiServiceService) { 

  }

  productList: any;
  
  ngOnInit(): void {
    this.apiServiceService.getProduct().subscribe(data => {
      this.productList = data;
      this.productList = this.productList.data
      console.log(this.productList);     
    })
  }

  editProduct() {
    console.log('edit');
    
  }
  deleteProduct(id: number, index: number) {
    console.log(id);
    this.apiServiceService.deleteProduct(id, 'delete').subscribe(res => {
      console.log(res);
    this.productList.splice(index, 1)
    })
  }

}
