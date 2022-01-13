import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private apiServiceService:ApiServiceService) { }

  ngOnInit(): void {
  }

  getCategortFormData(dataAdd:any) {      
    console.log(dataAdd);
    this.apiServiceService.addCategory(dataAdd).subscribe((res) => {
      console.log(res);        
    })
  }
}
