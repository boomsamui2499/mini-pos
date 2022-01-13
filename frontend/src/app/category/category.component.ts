import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: any
  constructor(
    private apiServiceService:ApiServiceService,
    ) { }

  editCategory() {
    console.log("edit");
    
  }
  deleteCategory(id: number, index: number) {
    console.log(id);
    this.apiServiceService.deleteCategory(id, 'delete').subscribe(res => {
      console.log(res);
    this.categoryList.splice(index, 1)
    })
  }

  ngOnInit(): void {
    this.apiServiceService.getCategory().subscribe(data => {
      this.categoryList = data;
      this.categoryList = this.categoryList.data
      console.log(this.categoryList);     
    })
  }

}
