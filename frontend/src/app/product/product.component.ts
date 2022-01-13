import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router) { 

  }

  productList: any;
  
  ngOnInit(): void {
    this.apiServiceService.getProduct().subscribe(data => {
      this.productList = data;
      this.productList = this.productList.data
      console.log(this.productList);     
    })
  }

  editProduct(id: number) {
    console.log('edit');
    this.router.navigateByUrl('/product_edit/' + id)
  }
  deleteProduct(id: number, index: number) {
    console.log(id);
    this.apiServiceService.deleteProduct(id, 'delete').subscribe(res => {
      console.log(res);
    this.productList.splice(index, 1)
    })
  }

}
