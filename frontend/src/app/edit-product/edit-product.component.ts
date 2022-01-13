import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  getProductFormData(dataAdd:any) { 
    console.log(dataAdd);
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id);
    this.apiServiceService.editProduct(id, dataAdd).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/product')
    })
  }
}
