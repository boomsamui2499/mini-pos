import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: any
  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router
    ) { }

  editCategory(id: number) {
    console.log('edit');
    this.router.navigateByUrl('/category_edit/' + id)
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
