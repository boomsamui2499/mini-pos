import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  getProductFormData(dataAdd:any) {      
    console.log(dataAdd);
    this.apiServiceService.addProduct(dataAdd).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/product')
    })
  }

}
