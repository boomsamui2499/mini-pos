import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  getCategortFormData(dataAdd:any) {      
    console.log(dataAdd);
    this.apiServiceService.addCategory(dataAdd).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/category') 
    })
  }
}
